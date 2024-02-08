import { groq } from 'next-sanity'
import { sanityFetch } from '../sanity/fetch'
import { heroQuery, sectionsQuery } from './queryPartials'

// Assemble params to get specific page
// This makes sure that we only build each pages once, at the correct "slug"-position in the 3-level page-tree
export default async function getPageBySlugTree({ slugs }) {
  const slug = slugs[slugs.length - 1]
  const parentSlug = slugs[slugs.length - 2] ?? null
  const grandParentSlug = slugs[slugs.length - 3] ?? null

  return await sanityFetch({
    query,
    params: { slug, parentSlug, grandParentSlug },
    tags: [`page:${slug}`],
  })
}

const query = groq`
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
