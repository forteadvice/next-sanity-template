import { settingsQuery } from './fetch/queryPartials'
import { sanityFetch } from './sanity.fetch'

export default async function getMetaObject(meta) {
  // Specify the meta values for readbility
  const {title, description, image} = meta || {}
  // Get default meta from settings if seo not complete
  let defaultMeta = null
  if (!title || !description || !image) {
    const settings = await sanityFetch({ query: settingsQuery, tags: ['default-meta'] })
    defaultMeta = settings?.defaultSeo
  }

  return {
    title: title ?? defaultMeta?.title ?? '',
    description: description ?? defaultMeta?.description ?? '',
    openGraph: {
      images: [(image ?? defaultMeta?.image) || undefined].filter(i => i),
    },

  }
}
