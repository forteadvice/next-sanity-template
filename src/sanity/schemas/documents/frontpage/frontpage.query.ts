import { groq } from 'next-sanity'
import { heroQuery } from '../../objects/hero/hero.query'
import { sectionsQuery } from '../../objects/sections/sections.query'
import { seoQuery } from '../../objects/seo/seo.query'

/**
 * Frontpage Query
 * @description Queries Frontpage data - no params needed
 */
export const frontpageQuery = groq`
  *[_type == "frontpage"][0] {
    hero ${heroQuery} ,
    sections[] ${sectionsQuery},
    seo ${seoQuery} ,
  }
`
