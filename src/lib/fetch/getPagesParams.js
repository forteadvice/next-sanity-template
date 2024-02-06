import { groq } from 'next-sanity'
import { sanityFetch } from '../sanity.fetch'

export default async function getPagesParams() {
  return await sanityFetch({
    query,
    tags: ['pages'],
  })
}

const query = groq`
*[_type == 'page' && defined(slug.current)][] {
  'slugs': [slug.current],
  defined(parent->slug.current) => {
    'slugs': [parent->slug.current, slug.current]
  },
  defined(parent->parent->slug.current) => {
    'slugs': [parent->parent->slug.current, parent->slug.current, slug.current]
  },
}
`
