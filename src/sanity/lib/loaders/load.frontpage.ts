import { frontpageQuery } from '@/sanity/schemas/documents/frontpage/frontpage.query'
import { TFrontPage } from '@/sanity/schemas/documents/frontpage/frontpage.props'
import { sanityLoad } from '../sanity.load'

export async function loadFrontpage() {
  return await sanityLoad<TFrontPage>({ query: frontpageQuery, tags: ['frontpage'] })
}
