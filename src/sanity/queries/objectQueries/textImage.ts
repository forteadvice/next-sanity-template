import { groq } from 'next-sanity'

import { baseImageQuery, type TBaseImage } from '../fieldQueries/baseImage'
import { textSectionQuery, type TTextSection } from './textSection'

export const textImageQuery = groq`{
  textSection ${textSectionQuery},
  image ${baseImageQuery},
  layout,
}`

export type TTextImage = {
  textSection?: TTextSection
  image?: TBaseImage
  layout?: 'textImage' | 'imageText'
}
