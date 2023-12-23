import { map, Observable } from 'rxjs'
import {PageSingletons} from '@/sanity/schemas/singletons'
import {PageDocuments} from '@/sanity/schemas/documents'
import {
  DocumentLocationResolver,
  DocumentLocationsState,
} from 'sanity/presentation'

// import { resolveHref } from '@/sanity/lib/utils'
const pageTypes = [...PageSingletons, ...PageDocuments].map(page => page.name)
export const locate: DocumentLocationResolver = (params, context) => {
  if (params.type === 'settings') {
    return {
      message: 'This document is used on all pages',
      tone: 'caution',
    } satisfies DocumentLocationsState
  }

  if (
    pageTypes.some(type => params.type === type)
  ) {
    const doc$ = context.documentStore.listenQuery(
      `*[_id==$id || references($id)]{_type,title, path}`,
      params,
      { perspective: 'previewDrafts' },
    ) as Observable<
      | {
          _type: string,
          path: string,
          title: string | null,
        }[]
      | null
    >
    return doc$.pipe(
      map((docs) => {
        const isReferencedBySettings = docs?.some(
          (doc) => doc._type === 'settings',
        )
        switch (params.type) {
          case 'frontpage':
            return isReferencedBySettings
              ? ({
                  locations: [
                    {
                      title:
                        docs?.find((doc) => doc._type === 'frontpage')?.title ||
                        'Frontpage',
                      href: '/',
                    },
                  ],
                  tone: 'positive',
                  message: 'This document is used to render the front page',
                } satisfies DocumentLocationsState)
              : ({
                  tone: 'critical',
                  message: `The top menu isn't linking to the home page. This might make it difficult for visitors to navigate your site.`,
                } satisfies DocumentLocationsState)
          case 'page':
            return {
              locations: docs
                ?.map((doc) => {
                  const href = doc.path
                  return {
                    title: doc?.title || 'Untitled',
                    href: href!,
                  }
                })
                .filter((doc) => doc.href !== undefined),
              tone: isReferencedBySettings ? 'positive' : 'critical',
              message: isReferencedBySettings
                ? 'The top menu is linking to this page'
                : "The top menu isn't linking to this page. It can still be accessed if the visitor knows the URL.",
            } satisfies DocumentLocationsState
          default:
            return {
              message: `Unable to map document type (${params.type}) to locations`,
              tone: 'critical',
            } satisfies DocumentLocationsState
        }
      }),
    )
  }

  return null
}
