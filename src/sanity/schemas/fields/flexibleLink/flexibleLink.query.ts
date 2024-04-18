import { groq } from 'next-sanity'
import { referencePathQuery } from '../../../queries/helperQueries/referencePath'

export const flexibleLinkQuery = groq`{
  title,
  link {
    internal { 'path': ${referencePathQuery} },
    external,
  } 
}`
