import { groq } from 'next-sanity'
import { heroQuery, sectionsQuery } from './queryPartials'

export const frontpageQuery = groq`
*[_type == 'frontpage'][0] {
  ...,
  seo{
    ...,
    'image': image.asset->url,
  },
  ${heroQuery},
  ${sectionsQuery},
}
`
