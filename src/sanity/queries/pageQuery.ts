import { groq } from 'next-sanity'
import { type TPartialHeroPayload, heroQuery, seoQuery, sectionsQuery, TPartialSeoPayload } from './queryPartials'
import { type TPageParams } from './getPagesParams';


export type TPagePayload = TPartialHeroPayload & TPartialSeoPayload & {
  sections?: {
    _type: string,
    _key: string,
    [key: string]: any
  }[]
}


export const pageQuery = groq`
*[  _type == 'page' && slug.current == $slug &&
  (!defined(parent._ref) || parent->slug.current == $parentSlug) &&
  (!defined(parent->parent._ref) || parent->parent->slug.current == $grandParentSlug)][0] {
  ...,
  ${seoQuery},
  ${heroQuery},
  ${sectionsQuery},
}
`

export function paramsToParentSlugs (params: TPageParams) {
  const {slugs} = params
  return {
    slug: slugs[slugs.length-1] || '/',
    parentSlug: slugs[slugs.length-2] || '',
    grandParentSlug: slugs[slugs.length-3] || '',
  }
}

