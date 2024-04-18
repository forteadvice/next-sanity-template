import { type TTextImage } from '../textImage/textImage.props'
import { type TTextSection } from '../textSection/textSection.props'

export type TSection = {
  _type: string
  _key: string
} & (TTextSection | TTextImage)

export type TSections = TSection[]
