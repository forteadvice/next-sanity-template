/*
 * This file contains all useFunctions / preview-fetchers for Sanity
 */

import { useQuery } from './useQuery'
import { type QueryResponseInitial } from '@sanity/react-loader'
import { type TFrontPage } from '../schemas/singletons/frontpage'
import { type TPage } from '../schemas/documents/page'
import { type TSettings } from '../schemas/singletons/settings'

import { frontpageQuery, pageQuery, settingsQuery } from '../queries'

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
