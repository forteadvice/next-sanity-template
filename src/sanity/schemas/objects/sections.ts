import { groq } from 'next-sanity'
import { textImageQuery, textImageSchema, type TTextImage } from './textImage'
import { textSectionQuery, textSectionSchema, type TTextSection } from './textSection'

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

// Prepped section-maps ready to use in docs
export const defaultSections = mapSections([textImageSchema, textSectionSchema])

function mapSections(sectionArray: Array<{ name: string; type: string }>) {
  return sectionArray.map((section) => ({
    name: section.name,
    type: section.name,
  }))
}
