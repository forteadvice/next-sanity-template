import { groq } from 'next-sanity'
import { sanityFetch } from '../sanity.fetch'
import { heroQuery, contentBlocksQuery } from './queryPartials'

export default async function getFrontpageData() {
  return await sanityFetch({ query, tags: ['frontpage'] })
}

const query = groq`
*[_type == 'frontpage'][0] {
  ...,
  ${heroQuery},
  ${contentBlocksQuery},
}
`
