import { groq } from 'next-sanity'

/**
 * docReferencePathQuery
 * @description Resolves path for every possible doc-types
 */
export const referencePathQuery = groq`
  select(
    // _type == "subpage" => "/" + parent->slug.current + "/" + slug.current,
    _type == "page" => "/" + slug.current,
    "/"
  )
`

export type TReferencePath = string
