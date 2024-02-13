import { groq } from 'next-sanity'

import textSection, { textSectionQuery, type TTextSection } from './textSection'
import TextImage, { textImageQuery, type TTextImage } from './textImage'
import mainImage from './mainImage'

// Example of differentiated sections according to page type
export const frontPageSections = mapSections([textSection, TextImage])

// Example of differentiated sections according to page type
export const pageSections = mapSections([textSection, TextImage, mainImage])

// All sections
const sections = [textSection, TextImage, mainImage]
export default sections

export type TSections = Array<TTextSection | TTextImage>
export const sectionsQuery = groq`
  _type == 'textSection' => { ${textSectionQuery} },
  _type == 'textImage' => { ${textImageQuery} },
`

/*
 * Helper function to map out doc-specific sections
 */
function mapSections(sectionArray: Array<{ name: string; type: string }>) {
  return sectionArray.map((section) => ({
    name: section.name,
    type: section.name,
  }))
}
