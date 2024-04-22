import { groq } from 'next-sanity'
import { baseImageQuery } from '../../fields/baseImage/baseImage.query'
import { textSectionQuery } from '../textSection/textSection.query'

export const textImageQuery = groq`{
  textSection ${textSectionQuery},
  image ${baseImageQuery},
  layout,
}`
