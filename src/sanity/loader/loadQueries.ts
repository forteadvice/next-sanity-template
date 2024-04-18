import 'server-only'

import { loadQuery } from './loadQuery'
import { frontpageQuery } from '../schemas/documents/frontpage/frontpage.query'
import { type TFrontPage } from '../schemas/documents/frontpage/frontpage.props'
import { pageQuery, pagesParamsQuery } from '../schemas/documents/page/page.query'
import { type TPage, type TPageParams } from '../schemas/documents/page/page.props'
import { settingsQuery } from '../schemas/documents/settings/settings.query'
import { type TSettings } from '../schemas/documents/settings/settings.props'

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
