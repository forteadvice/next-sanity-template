import { groq } from 'next-sanity'
import { heroQuery, type THero } from '../objectQueries/hero'
import { sectionsQuery, type TSections } from '../objectQueries/sections'
import { seoQuery, type TSeo } from '../objectQueries/seo'

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

export type TFrontPage = {
  hero?: THero
  sections?: TSections
  seo?: TSeo
}
