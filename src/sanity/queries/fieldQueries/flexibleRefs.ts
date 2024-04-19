import { groq } from 'next-sanity'
import { referencePathQuery, type TReferencePath } from '../helperQueries/referencePath'

/**
 * Flexible Refs Query
 * Selects either internal reference, or external url depending which exists
 */
export const flexibleRefsQuery = groq`{
  defined(internal) => {
    ...internal-> {
      'href': ${referencePathQuery}
    }
  },
  defined(external) => {
    'href': select(external in path("www.**") => "https://" + external, external)
  }
}`

export type TFlexibleRefs = {
  href: string | TReferencePath
}
