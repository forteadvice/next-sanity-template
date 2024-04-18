/*
 * This file contains all useFunctions / preview-fetchers for Sanity
 */

import { useQuery } from '@sanity/react-loader'
import { type QueryResponseInitial } from '@sanity/react-loader'
import { frontpageQuery } from '../schemas/documents/frontpage/frontpage.query'
import { type TFrontPage } from '../schemas/documents/frontpage/frontpage.props'
import { pageQuery } from '../schemas/documents/page/page.query'
import { type TPage } from '../schemas/documents/page/page.props'
import { settingsQuery } from '../schemas/documents/settings/settings.query'
import { type TSettings } from '../schemas/documents/settings/settings.props'

// Frontpage
export function useFrontpage(initial: QueryResponseInitial<TFrontPage>) {
  return useQuery<TFrontPage>(frontpageQuery, {}, { initial })
}

// Pages
export function usePage(initial: QueryResponseInitial<TPage>, slugs: string[]) {
  const slug = slugs[slugs.length - 1]
  const parentSlug = slugs[slugs.length - 2] ?? null
  const grandParentSlug = slugs[slugs.length - 3] ?? null
  const params = { slug, parentSlug, grandParentSlug }
  return useQuery<TPage>(pageQuery, params, { initial })
}

// Settings
export function useSettings(initial: QueryResponseInitial<TSettings>) {
  return useQuery<TSettings>(settingsQuery, {}, { initial })
}
