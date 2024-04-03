import 'server-only'

import { setServerClient, loadQuery as LOAD_QUERY } from '@sanity/react-loader'

import { client } from '@/sanity/lib/sanity.client'
import { token } from '@/sanity/lib/sanity.token'
import isDraftModeFn from '@/lib/isDraftMode'
const isDraftMode = isDraftModeFn()

/**
 * serverClient
 * @description Extends client with token and stega - if draft mode
 */
const serverClient = client.withConfig({
  token: isDraftMode ? token : undefined,
  stega: {
    enabled: isDraftMode,
  },
})
setServerClient(serverClient)

/**
 * Customized loadQuery
 * @description Overwrites the react-loader loadQuery,
 * in order to enable draft links and NextJS revalidation
 */
export const loadQuery = ((query, params = {}, options = {}) => {
  const { perspective = isDraftMode ? 'previewDrafts' : 'published' } = options
  const revalidate: NextFetchRequestConfig['revalidate'] = isDraftMode ? 0 : false

  return LOAD_QUERY(query, params, {
    ...options,
    perspective,
    next: {
      revalidate,
      ...(options.next || {}),
    },
  })
}) satisfies typeof LOAD_QUERY
