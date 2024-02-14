import 'server-only'

import * as queryStore from '@sanity/react-loader'

import isDraftModeFunction from '@/lib/isDraftMode'
import { client } from '@/sanity/client'
import { token } from '@/sanity/token'

const isDraftMode = isDraftModeFunction()

// Extend client as serverClient with token and stega
const serverClient = client.withConfig({
  token, // TODO, try only set token if draftMode().isEnabled
  stega: {
    enabled: isDraftMode,
  },
})

queryStore.setServerClient(serverClient)

export const loadQuery = ((query, params = {}, options = {}) => {
  // Set perspective depending on draftMode
  const { perspective = isDraftMode ? 'previewDrafts' : 'published' } = options
  // Set perspective depending on draftMode
  const revalidate: NextFetchRequestConfig['revalidate'] = isDraftMode ? 0 : false

  return queryStore.loadQuery(query, params, {
    ...options,
    perspective,
    next: {
      revalidate,
      ...(options.next || {}),
    },
  })
}) satisfies typeof queryStore.loadQuery
