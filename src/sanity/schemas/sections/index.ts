import textSection, { type TTextSection } from './textSection'
import TextImage, { type TTextImage } from './textImage'

// Section type and query - can be used by all section-maps
export type TSection = TTextSection | TTextImage

// Sections schema import
const sections = [textSection, TextImage]
export default sections

// Prepped section-maps ready to use in docs
export const allSections = mapSections(sections)
export const frontPageSections = mapSections([textSection, TextImage])
export const pageSections = mapSections([textSection, TextImage])

// Helper function to map out doc-specific sections
function mapSections(sectionArray: Array<{ name: string; type: string }>) {
  return sectionArray.map((section) => ({
    name: section.name,
    type: section.name,
  }))
}
