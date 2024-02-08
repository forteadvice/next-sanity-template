import 'server-only'

import { draftMode } from 'next/headers'
import * as queryStore from '@sanity/react-loader'

import { client } from '@/lib/sanity/client'
import { token } from '@/lib/token'

// Extend client as serverClient with token and stega
const serverClient = client.withConfig({
  token, // TODO, try only set token if draftMode().isEnabled
  stega: {
    enabled: false,
    // enabled: process.env.VERCEL_ENV === 'preview',
    // enabled: draftMode().isEnabled, --- not supported yet.
  },
})

queryStore.setServerClient(serverClient)

export const loadQuery = ((query, params = {}, options = {}) => {
  // Set perspective depending on draftMode
  const { perspective = draftMode().isEnabled ? 'previewDrafts' : 'published' } = options
  // Set perspective depending on draftMode
  const revalidate: NextFetchRequestConfig['revalidate'] = draftMode().isEnabled ? 0 : false

  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
    perspective,
  })
}) satisfies typeof queryStore.loadQuery
