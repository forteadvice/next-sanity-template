import { groq } from 'next-sanity'
import { docReferencePathQuery } from './queryPartials'

export const settingsQuery = groq`
*[_type == 'settings'][0] {
  ...,
  defaultSeo{
    ...,
    "image": image.asset->url,
  },
  menu {
    links[] {
      ...,
      title,
      _key,
      ...reference->{
        ${docReferencePathQuery},
      }
    }
  }
}
`
