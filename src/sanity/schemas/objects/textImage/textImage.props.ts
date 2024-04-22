import { type TBaseImage } from '../../fields/baseImage/baseImage.props'
import { type TTextSection } from '../textSection/textSection.props'

export type TTextImage = {
  textSection?: TTextSection
  image?: TBaseImage
  layout?: 'textImage' | 'imageText'
}
