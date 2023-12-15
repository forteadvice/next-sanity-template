import { groq } from 'next-sanity'
import { sanityFetch } from '../sanity.fetch'
import { docReferencePathQuery } from './queryPartials'

export default async function getSettingsData() {
  return await sanityFetch({ query, tags: ['settings'] })
}

export const query = groq`
*[_type == 'settings'][0] {
  ...,
  defaultSeo{
    ...,
    "image": image.asset->url,
  },
  menu {
    links[] {
      title,
      _key,
      ${docReferencePathQuery},
    }
  }
}
`
