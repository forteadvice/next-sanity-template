import 'server-only'

import { loadQuery } from './loadQuery'
import { frontpageQuery, type TFrontPage } from '../queries/documentQueries/frontpage'
import {
  pageQuery,
  pagesParamsQuery,
  type TPage,
  type TPageParams,
} from '../queries/documentQueries/page'
import { settingsQuery, type TSettings } from '../queries/documentQueries/settings'

// Frontpage
export async function loadFrontpage() {
  return await loadQuery<TFrontPage>(frontpageQuery, {}, { next: { tags: ['frontpage'] } })
}

// Pages params for generateStaticParams
export async function loadPagesParams() {
  return await loadQuery<TPageParams>(pagesParamsQuery, {}, { next: { tags: ['pages'] } })
}

// Single page from slug tree
export async function loadPage(slugs: string[]) {
  const slug = slugs[slugs.length - 1]
  const parentSlug = slugs[slugs.length - 2] || null
  const grandParentSlug = slugs[slugs.length - 3] || null
  const params = { slug, parentSlug, grandParentSlug }
  return await loadQuery<TPage>(pageQuery, params, { next: { tags: [`page:${slug}`] } })
}

// Settings
export async function loadSettings() {
  return await loadQuery<TSettings>(settingsQuery, {}, { next: { tags: ['settings'] } })
}
