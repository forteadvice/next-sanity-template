/*
 * This file contains all loadFunctions / sever-side fetchers for Sanity
 */

import 'server-only'

import { loadQuery } from './loadQuery'
import { type TFrontPage } from '../schemas/singletons/frontpage'
import { type TPage } from '../schemas/documents/page'
import { type TSettings } from '../schemas/singletons/settings'
import { frontpageQuery, pageQuery, settingsQuery, pagesParamsQuery } from '../queries'

// Frontpage
export async function loadFrontpage() {
  return await loadQuery<TFrontPage>(frontpageQuery, {}, { next: { tags: ['frontpage'] } })
}

// Pages params for generateStaticParams
export async function loadPagesParams() {
  return await loadQuery<string[]>(pagesParamsQuery, {}, { next: { tags: ['pages'] } })
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
