import { TFlexibleLink } from '../../fields/flexibleLink/flexibleLink.props'
import { type TPortableText } from '../../fields/portableText/portableText.props'

export type TTextSection = {
  title?: string
  text?: TPortableText
  ctaLink?: TFlexibleLink
}
