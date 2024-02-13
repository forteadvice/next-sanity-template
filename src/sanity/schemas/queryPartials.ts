import { groq } from 'next-sanity'
import type { PortableTextBlock } from '@portabletext/types'

/*
 * docReferencePathQuery should be used as the main and preferebly only path / url-resolver.
 * If needed, modify this to accept all page types.
 */

export const docReferencePathQuery = groq`
  _type == "frontpage" => {
    'path': "/"
  },

  _type == "page" => {
    'path': slug.current,
    defined(parent->slug.current) => {
      'path': parent->slug.current + "/" + slug.current
    },
    defined(parent->parent->slug.current) => {
      'path': parent->parent->slug.current + "/" + parent->slug.current + "/" + slug.current
    }
  }
`
export type TDocReferencePath = {
  path?: string
}

/*
 * Porable text
 */
export const portableTextQuery = groq`
  ...,
  markDefs[] {
    ...,
    _type == 'internalLink' => {
      ...,
      ...reference->{
        ${docReferencePathQuery}
      }
    },
  },
`
export type TPortableText = PortableTextBlock[]
