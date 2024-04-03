import { groq } from 'next-sanity'
import type { PortableTextMarkDefinition } from '@portabletext/types'
import { referencePathQuery } from '../helperQueries/referencePath'

/**
 * portableTextQuery
 * @description Resolves all types of portable texts. Use type TDocReferencePath
 */
export const portableTextQuery = groq`{
  ...,
  markDefs[] {
    ...,
    _type == 'linkInternal' => {
      ...,
      ...reference->{ "path": ${referencePathQuery} }
    },
  },
}`

export type TPortableText = PortableTextMarkDefinition
