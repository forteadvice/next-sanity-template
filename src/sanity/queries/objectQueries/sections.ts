import { groq } from 'next-sanity'
import { textSectionQuery, type TTextSection } from './textSection'
import { textImageQuery, type TTextImage } from './textImage'

export const sectionsQuery = groq`{
  _type,
  _key,
  _type == "textSection" => ${textSectionQuery},
  _type == "textImage" => ${textImageQuery}
}`

export type TSection = {
  _type: string
  _key: string
} & (TTextSection | TTextImage)

export type TSections = TSection[]
