import textSection from './textSection'
import TextImage from './textImage'
import mainImage from './mainImage'

// Example of differentiated sections according to page type
export const frontPageSections = mapSections([textSection, TextImage])

// Example of differentiated sections according to page type
export const pageSections = mapSections([textSection, TextImage, mainImage])

// All sections
const sections = [textSection, TextImage, mainImage]
export default sections

/*
 * Helper function to map out doc-specific sections
 */
function mapSections(sectionArray: Array<{ name: string; type: string }>) {
  return sectionArray.map((section) => ({
    name: section.name,
    type: section.name,
  }))
}
