import { groq } from 'next-sanity'
import { flexibleRefsQuery } from '../flexibleRefs/flexibleRefs.query'

export const flexibleLinkQuery = groq`{
  title,
  ...href ${flexibleRefsQuery}
}`
