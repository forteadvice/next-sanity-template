import { groq } from 'next-sanity'
import { flexibleRefsQuery, TFlexibleRefs } from './flexibleRefs'

/**
 * Flexible link
 */
export const flexibleLinkQuery = groq`{
  title,
  ...href ${flexibleRefsQuery}
}`

export type TFlexibleLink = {
  title?: string
} & TFlexibleRefs
