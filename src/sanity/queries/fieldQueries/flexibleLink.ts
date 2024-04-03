import { groq } from 'next-sanity'
import { referencePathQuery, type TReferencePath } from '../helperQueries/referencePath'

/**
 * Flexible link
 */
export const flexibleLinkQuery = groq`{
  title,
  link {
    internal { 'path': ${referencePathQuery} },
    external,
  } 
}`

export type TFlexibleLink = {
  title?: string
  link?: {
    internal?: { path?: TReferencePath }
    external?: string
  }
}
