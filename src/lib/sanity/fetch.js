import 'server-only'

import { draftMode } from 'next/headers'
import { client } from '../../sanity/client'

const token = process.env.SANITY_API_READ_TOKEN

export async function sanityFetch({ query, params = {}, tags = [] }) {
  let isPreview = undefined
  try {
    isPreview = draftMode().isEnabled
  } catch {
    isPreview = false
  }

  if (isPreview && !token) {
    throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.')
  }

  return client.fetch(query, params, {
    ...(isPreview && {
      token,
      // perspective: 'previewDrafts',
    }),
    next: {
      revalidate: isPreview ? 0 : false,
      tags,
    },
  })
}
