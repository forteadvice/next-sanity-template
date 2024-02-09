import { groq } from 'next-sanity'
import { map } from 'rxjs'
import { docReferencePathQuery } from '../../lib/fetch/queryPartials'

export function locate(params, context) {
  if (params.type === 'page' || params.type === 'frontpage') {
    // Subscribe to the latest slug and title
    const doc$ = context.documentStore.listenQuery(
      groq`*[_id == $id][0]{title,${docReferencePathQuery}}`,
      params,
      {
        perspective: 'previewDrafts',
      },
    )

    // Return a streaming list of locations
    return doc$.pipe(
      map((doc) => {
        if (!doc || !doc?.path) return null

        return {
          locations: [
            {
              title: doc?.title || 'Untitled',
              href: doc?.path,
            },
          ],
        }
      }),
    )
  }
  return null
}
