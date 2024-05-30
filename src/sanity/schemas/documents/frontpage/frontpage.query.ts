import { groq } from 'next-sanity'
import { heroQuery } from '../../objects/hero/hero.query'
import { contentBlocksQuery } from '../../objects/contentBlocks/contentBlocks.query'
import { seoQuery } from '../../objects/seo/seo.query'

/**
 * Frontpage Query
 * @description Queries Frontpage data - no params needed
 */
export const frontpageQuery = groq`
  *[_type == "frontpage"][0] {
    hero ${heroQuery} ,
    contentBlocks[] ${contentBlocksQuery},
    seo ${seoQuery} ,
  }
`
