import { groq } from 'next-sanity'
import { referencePathQuery } from '../../../queries/helperQueries/referencePath'

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
