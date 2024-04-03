import { groq } from 'next-sanity'

/**
 * docReferencePathQuery
 * @description Resolves path for every possible doc-types
 */
export const referencePathQuery = groq`
  select(
    _type == "page" && defined(parent->parent->slug.current) => "/" + parent->parent->slug.current + "/" + parent->slug.current + "/" + slug.current,
    _type == "page" && defined(parent->slug.current) => "/" + parent->slug.current + "/" + slug.current,
    _type == "page" => "/" + slug.current,
    "/"
  )
`

export type TReferencePath = string
