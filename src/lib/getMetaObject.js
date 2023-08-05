import { getCachedClient } from './getClient'
import { settingsQuery } from './queries'

export default async function getMetaObject(meta) {
  // Get default meta from settings if seo not complete
  let defaultMeta = null
  if (!meta?.title || meta?.description) {
    const settings = await getCachedClient()(settingsQuery)
    defaultMeta = settings?.defaultSeo
  }

  return {
    title: meta?.title ?? defaultMeta?.title ?? '',
    description: meta?.description ?? defaultMeta?.description ?? '',
  }
}
