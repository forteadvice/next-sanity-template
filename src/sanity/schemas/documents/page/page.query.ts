import { groq } from 'next-sanity'
import { heroQuery } from '../../objects/hero/hero.query'
import { contentBlocksQuery } from '../../objects/contentBlocks/contentBlocks.query'
import { seoQuery } from '../../objects/seo/seo.query'

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
    contentBlocks[] ${contentBlocksQuery},
    seo ${seoQuery} ,
  }
`

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
