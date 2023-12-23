import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { token } from '@/sanity/lib/token'

// import { sanityFetch } from '../sanity.fetch'

// export default async function getPagesParams() {
//   return await sanityFetch({
//     query,
//     tags: ['pages'],
//   })
// }
export type PageParams = {
  slugs: string[]
}
const paramsQuery = groq`
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
export function loadPageParams() {
  return client
  .withConfig({
    token,
    perspective: 'published',
    useCdn: false,
    stega: false,
  })
  .fetch<PageParams[]>(
    paramsQuery
  )
} 