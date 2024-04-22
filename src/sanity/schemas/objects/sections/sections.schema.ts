import { textImageSchema } from '../textImage/textImage.schema'
import { textSectionSchema } from '../textSection/textSection.schema'

// Prepped section-maps ready to use in docs
export const defaultSections = mapSections([textImageSchema, textSectionSchema])

function mapSections(sectionArray: Array<{ name: string; type: string }>) {
  return sectionArray.map((section) => ({
    name: section.name,
    type: section.name,
  }))
}
