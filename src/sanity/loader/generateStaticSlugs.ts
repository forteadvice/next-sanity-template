import 'server-only'

import { groq } from 'next-sanity'

import { client } from '@/sanity/lib/client'
import { token } from '@/sanity/lib/token'

export type pageParams = {
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
// Used in `generateStaticParams`
export function generateStaticSlugs(type: string) {
  // Not using loadQuery as it's optimized for fetching in the RSC lifecycle
  return client
    .withConfig({
      token,
      perspective: 'published',
      useCdn: false,
      stega: false,
    })
    .fetch<string[]>(
      groq`*[_type == $type && defined(slug.current)]{"slug": slug.current}`,
      { type },
    )
}
