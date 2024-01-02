import { groq } from 'next-sanity'
import { type TPartialHeroPayload, heroQuery, seoQuery, sectionsQuery, TPartialSeoPayload } from './queryPartials'

export type TFrontpagePayload = TPartialHeroPayload & TPartialSeoPayload & {
  sections?: {
    _type: string,
    _key: string,
    [key: string]: any
  }[]
}

export const frontpageQuery = groq`
*[_type == 'frontpage'][0] {
  ...,
  ${seoQuery},
  ${heroQuery},
  ${sectionsQuery},
}
`

