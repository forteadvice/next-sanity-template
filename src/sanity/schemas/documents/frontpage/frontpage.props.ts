import { type THero } from '../../objects/hero/hero.props'
import { type TSections } from '../../objects/sections/sections.props'
import { type TSeo } from '../../objects/seo/seo.props'

export type TFrontPage = {
  hero?: THero
  sections?: TSections
  seo?: TSeo
}
