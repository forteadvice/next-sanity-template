import 'server-only'

import { client } from './sanity.client'
import { token } from './sanity.token'
import isDraftMode from '@/lib/isDraftMode'

type TSanityFetchProps = {
  query: string
  params?: object
  tags?: string[]
}

export async function sanityLoad<T>({
  query,
  params = {},
  tags = [],
}: TSanityFetchProps): Promise<T> {
  const isPreview = isDraftMode()

  return client.fetch<T>(query, params, {
    ...(isPreview && {
      token,
      perspective: 'previewDrafts',
      useCdn: isPreview ? false : true,
    }),
    next: {
      revalidate: isPreview ? 0 : false,
      tags,
    },
  })
}
