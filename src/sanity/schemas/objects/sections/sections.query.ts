import { groq } from 'next-sanity'
import { textImageQuery } from '../textImage/textImage.query'
import { textSectionQuery } from '../textSection/textSection.query'

export const sectionsQuery = groq`{
  _type,
  _key,
  _type == "textSection" => ${textSectionQuery},
  _type == "textImage" => ${textImageQuery}
}`
