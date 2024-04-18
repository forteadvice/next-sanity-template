import { groq } from 'next-sanity'
import { baseImageQuery, type TBaseImage } from '../fieldQueries/baseImage'
import { referencePathQuery, type TReferencePath } from '../helperQueries/referencePath'

export const heroQuery = groq`{
  headline,
  manchet,
  image ${baseImageQuery},
  theme,
  'breadcrumb': [
    {
      'href': "/",
      'title': "Forside"
    },
    ^.parent-> {
      'href': ${referencePathQuery},
      title,
    },
    ^{
      'href': ${referencePathQuery},
      title,
    },
  ][@ != null],
}`

export type THero = {
  headline?: string
  manchet?: string
  image?: TBaseImage
}
