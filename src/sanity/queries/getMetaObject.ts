// import { query as settingsQuery } from './fetch/getSettingsData'
import {type TSeoInput} from './types'
import { loadSettings } from './settingsQuery';
// import { sanityFetch } from './sanity.fetch'

export async function getMetaObject(props: TSeoInput) {
  const {seo} = props
  // Specify the meta values for readbility
  const {title, description, image} = seo || {}
  // Get default meta from settings if seo not complete
  let defaultMeta = null

  if (!title || !description || !image) {
    const {data} = await loadSettings()
    // const settings = await sanityFetch({ query: settingsQuery, tags: ['default-meta'] })
    defaultMeta = data?.defaultSeo
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_PRODUCTION_URL || 'http://localhost:3000'),
    title: title ?? defaultMeta?.title ?? '',
    description: description ?? defaultMeta?.description ?? '',
    openGraph: {
      images: [(image ?? defaultMeta?.image) || undefined].filter(i => i),
    },
  }
}
