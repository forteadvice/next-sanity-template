/*
 * This file contains all loadFunctions / sever-side fetchers for Sanity
 */

import 'server-only'

import { groq } from 'next-sanity'
import { loadQuery } from './loadQuery'
import { frontpageQuery, type TFrontPage } from '../schemas/singletons/frontpage'
import { pageQuery, TPage } from '../schemas/documents/page'
import { settingsQuery } from '../queries/settingsQuery'

// Frontpage
export async function loadFrontpage() {
  return await loadQuery<TFrontPage>(frontpageQuery, {}, { next: { tags: ['frontpage'] } })
}

// Pages params for generateStaticParams
export async function loadPagesParams() {
  const paramsQuery = groq`
    *[_type == 'page' && defined(slug.current)][] {
      'slugs': [slug.current],
      defined(parent->slug.current) => {
        'slugs': [parent->slug.current, slug.current]
      },
      defined(parent->parent->slug.current) => {
        'slugs': [parent->parent->slug.current, parent->slug.current, slug.current]
      },
    }
  `
  return await loadQuery<string[]>(paramsQuery, {}, { next: { tags: ['pages'] } })
}

// Single page from slug tree
export async function loadPage(slugs: string[]) {
  const slug = slugs[slugs.length - 1]
  const parentSlug = slugs[slugs.length - 2] ?? null
  const grandParentSlug = slugs[slugs.length - 3] ?? null
  const params = { slug, parentSlug, grandParentSlug }
  return await loadQuery<TPage>(pageQuery, params, { next: { tags: [`page:${slug}`] } })
}

// Settings
export async function loadSettings() {
  return await loadQuery<any>(settingsQuery, {}, { next: { tags: ['settings'] } })
}
