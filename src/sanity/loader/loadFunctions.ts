/*
 * This file contains all loadFunctions - aka ssr sanityClient requests
 */

import 'server-only'

import { loadQuery } from './loadQuery'
import { frontpageQuery } from '../queries/frontpageQuery'
import { pagesParamsQuery } from '../queries/pagesParamsQuery'
import { pageQuery } from '../queries/pageQuery'
import { settingsQuery } from '../queries/settingsQuery'

// Frontpage
export async function loadFrontpage() {
  return await loadQuery<any | null>(frontpageQuery, {}, { next: { tags: ['frontpage'] } })
}

// Pages params for generateStaticParams
export async function loadPagesParams() {
  return await loadQuery<any | null>(pagesParamsQuery, {}, { next: { tags: ['pages'] } })
}

// Single page from slug tree
export async function loadPage(slugs: string[]) {
  const slug = slugs[slugs.length - 1]
  const parentSlug = slugs[slugs.length - 2] ?? null
  const grandParentSlug = slugs[slugs.length - 3] ?? null
  const params = { slug, parentSlug, grandParentSlug }
  return await loadQuery<any | null>(pageQuery, params, { next: { tags: [`page:${slug}`] } })
}

// Settings
export async function loadSettings() {
  return await loadQuery<any | null>(settingsQuery, {}, { next: { tags: ['settings'] } })
}
