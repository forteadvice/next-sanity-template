import { type THero } from '../../objects/hero/hero.props'
import { type TContentBlocks } from '../../objects/contentBlocks/contentBlocks.props'
import { type TSeo } from '../../objects/seo/seo.props'

export type TFrontPage = {
  hero?: THero
  contentBlocks?: TContentBlocks
  seo?: TSeo
}
