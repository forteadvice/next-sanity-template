import { sanityLoad } from '../sanity.load'
import { pageQuery } from '@/sanity/schemas/documents/page/page.query'
import type { TPage } from '@/sanity/schemas/documents/page/page.props'
import { pagesParamsQuery } from '@/sanity/schemas/documents/page/page.query'
import type { TPageParams } from '@/sanity/schemas/documents/page/page.props'

export async function loadPagesParams() {
  return await sanityLoad<TPageParams>({ query: pagesParamsQuery, tags: ['pages'] })
}

export async function loadPage(slugs: string[]) {
  const slug = slugs[slugs.length - 1]
  const parentSlug = slugs[slugs.length - 2] || null
  const grandParentSlug = slugs[slugs.length - 3] || null
  const params = { slug, parentSlug, grandParentSlug }
  return await sanityLoad<TPage>({ query: pageQuery, params, tags: [`page:${slug}`] })
}
