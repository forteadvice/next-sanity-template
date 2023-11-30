import { settingsQuery } from './fetch/queryPartials'
import { sanityFetch } from './sanity.fetch'

export default async function getMetaObject(meta) {
  // Get default meta from settings if seo not complete
  let defaultMeta = null
  if (!meta?.title || meta?.description) {
    const settings = await sanityFetch({ query: settingsQuery, tags: ['default-meta'] })
    defaultMeta = settings?.defaultSeo
  }

  return {
    title: meta?.title ?? defaultMeta?.title ?? '',
    description: meta?.description ?? defaultMeta?.description ?? '',
  }
}
