import { groq } from 'next-sanity'
import { heroQuery, sectionsQuery } from './queryPartials'

export const pageQuery = groq`
*[
  _type == 'page' && slug.current == $slug &&
  (!defined(parent._ref) || parent->slug.current == $parentSlug) &&
  (!defined(parent->parent._ref) || parent->parent->slug.current == $grandParentSlug)
  ][0] {
  ...,
  seo{
    ...,
    'image': image.asset->url,
  },
  ${heroQuery},
  ${sectionsQuery},
}
`
