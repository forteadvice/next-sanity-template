import { groq } from 'next-sanity'

import { heroQuery, type THero } from '../objectQueries/hero'
import { sectionsQuery, type TSections } from '../objectQueries/sections'
import { seoQuery, type TSeo } from '../objectQueries/seo'

/**
 * Page Query
 * @description params {slug: string, parentSlug: string, grandParentSlug: string}.
 */
export const pageQuery = groq`
  *[
    _type == 'page' && slug.current == $slug &&(!defined(parent._ref) || 
    parent->slug.current == $parentSlug) &&(!defined(parent->parent._ref) || 
    parent->parent->slug.current == $grandParentSlug) 
    ][0] {
    
    title,
    "slug": slug.current,
    hero ${heroQuery},
    sections[] ${sectionsQuery},
    seo ${seoQuery} ,
  }
`

export type TPage = {
  title?: string
  slug?: string
  hero?: THero
  sections?: TSections
  seo?: TSeo
}

/**
 * Pages Params Query
 * @description Queries array of slugs in page-tree [page, parent? and grandParent?]. - no params needed
 */
export const pagesParamsQuery = groq`
*[_type == 'page' && defined(slug.current)][] {
  'slugs': [slug.current],
  defined(parent->slug.current) => {
    'slugs': [parent->slug.current, slug.current]
  },
  defined(parent->parent->slug.current) => {
    'slugs': [parent->parent->slug.current, parent->slug.current, slug.current]
  },
}`

export type TPageParams = string[]
