import hero from './hero'
import seo from './seo'
import textImage from './textImage'
import textSection from './textSection'

export const objects = [hero, seo, textImage, textSection]

// Prepped section-maps ready to use in docs
export const defaultSections = mapSections([textImage, textSection])

function mapSections(sectionArray: Array<{ name: string; type: string }>) {
  return sectionArray.map((section) => ({
    name: section.name,
    type: section.name,
  }))
}
