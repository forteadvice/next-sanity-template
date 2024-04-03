import type { DocumentLocationResolver, DocumentLocationsState } from 'sanity/presentation'
import { Observable, map } from 'rxjs'
import { referencePathQuery } from '../queries/helperQueries/referencePath'
import { pageDocumentTypes } from '../schemas/documents'

export const locate: DocumentLocationResolver = (params, context) => {
  /*
   * Settings
   * Hardcoded location at root for ease of use
   */
  if (params.type === 'settings') {
    return {
      message: 'Used on all pages',
      locations: [
        {
          title: 'Frontpage',
          href: '/',
        },
      ],
    } satisfies DocumentLocationsState
  }

  /*
   * Page documents
   */
  if (pageDocumentTypes.some((type) => type == params.type)) {
    const docStream = context.documentStore.listenQuery(
      `*[_id == $id][0]{ _type, title, 'path': ${referencePathQuery} }`,
      params,
      { perspective: 'previewDrafts' },
    ) as Observable<
      | {
          _type: string
          title?: string
          path?: string
        }
      | undefined
    >

    return docStream.pipe(
      map((doc: any) => {
        if (!doc || !doc?.path) return null
        return {
          locations: [
            {
              title: doc?.title || 'Untitled',
              href: doc?.path,
            },
          ],
        } satisfies DocumentLocationsState
      }),
    )
  }

  return null
}
