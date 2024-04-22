import { groq } from 'next-sanity'
import { referencePathQuery } from '../../../queries/helperQueries/referencePath'

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
