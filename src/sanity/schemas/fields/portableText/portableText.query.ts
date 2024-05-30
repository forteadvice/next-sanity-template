import { groq } from 'next-sanity'
import { flexibleRefsQuery } from '../flexibleRefs/flexibleRefs.query'

/**
 * portableTextQuery
 * @description Resolves all types of portable texts. Use type TDocReferencePath
 */
export const portableTextQuery = groq`{
  ...,
  markDefs[] {
    ...,
    _type == "link" => ${flexibleRefsQuery},
  },
}`
