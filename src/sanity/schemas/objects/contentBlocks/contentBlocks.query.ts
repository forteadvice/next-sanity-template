import { groq } from 'next-sanity'
import { textImageQuery } from '../textImage/textImage.query'
import { textSectionQuery } from '../textSection/textSection.query'

export const contentBlocksQuery = groq`{
  _type,
  _key,
  _type == "textSection" => ${textSectionQuery},
  _type == "textImage" => ${textImageQuery}
}`
