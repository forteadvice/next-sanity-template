import { type QueryResponseInitial } from '@sanity/react-loader'

import { useQuery } from './useQuery'
import { frontpageQuery } from '../queries/frontpageQuery'
import { pageQuery } from '../queries/pageQuery'

// Frontpage
export function useFrontpage(initial: QueryResponseInitial<any>) {
  return useQuery<any>(frontpageQuery, {}, { initial })
}

// Pages
export function usePage(initial: QueryResponseInitial<any>, slugs: string[]) {
  const slug = slugs[slugs.length - 1]
  const parentSlug = slugs[slugs.length - 2] ?? null
  const grandParentSlug = slugs[slugs.length - 3] ?? null
  const params = { slug, parentSlug, grandParentSlug }
  return useQuery<any>(pageQuery, params, { initial })
}
