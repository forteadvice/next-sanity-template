import 'server-only'

import 'server-only'
import { client } from './sanity.client'

export async function sanityFetch({ preview = false, query, params = {}, tags = [] }) {
  if (preview && !preview?.token) {
    throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.')
  }

  return client.fetch(query, params, {
    cache: process.env.NODE_ENV === 'development' ? 'no-cache' : 'force-cache', // No fetch-data cache in dev
    ...(preview && {
      cache: undefined,
      token: preview.token,
      perspective: 'previewDrafts',
    }),
    next: {
      ...(preview && { revalidate: 0 }),
      tags,
    },
  })
}
