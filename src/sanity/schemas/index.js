import page from './documents/page'
// Singletons
import frontpage from './singletons/frontpage'
import settings from './singletons/settings'
// Objects
import mainImage from './objects/mainImage'
import seo from './objects/seo'
import portableText from './objects/portableText'
import linkInternal from './objects/linkInternal'
import linkExternal from './objects/linkExternal'
// Content-blocks
import hero from './content-blocks/hero'
import textBlock from './content-blocks/textBlock'

export const schemaTypes = [
  // Documents
  page,
  // Singletons
  frontpage,
  settings,
  // Objects
  mainImage,
  seo,
  portableText,
  linkInternal,
  linkExternal,
  // Content-blocks
  hero,
  textBlock,
]
