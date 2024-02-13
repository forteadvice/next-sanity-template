import { groq } from 'next-sanity'

import textSection, { textSectionQuery, type TTextSection } from './textSection'
import TextImage, { textImageQuery, type TTextImage } from './textImage'
import mainImage from './mainImage'

// Sections schema import
const sections = [textSection, TextImage, mainImage]
export default sections

// Prepped section-maps ready to use in docs
export const allSections = mapSections(sections)
export const frontPageSections = mapSections([textSection, TextImage])
export const pageSections = mapSections([textSection, TextImage, mainImage])

// Helper function to map out doc-specific sections
function mapSections(sectionArray: Array<{ name: string; type: string }>) {
  return sectionArray.map((section) => ({
    name: section.name,
    type: section.name,
  }))
}

// Sections type and query - can be used by all section-maps
export type TSections = Array<TTextSection | TTextImage>
export const sectionsQuery = groq`
  _type == 'textSection' => { ${textSectionQuery} },
  _type == 'textImage' => { ${textImageQuery} },
`
