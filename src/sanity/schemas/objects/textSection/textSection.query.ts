import { groq } from 'next-sanity'
import { portableTextQuery } from '../../fields/portableText/portableText.query'
import { flexibleLinkQuery } from '../../fields/flexibleLink/flexibleLink.query'

export const textSectionQuery = groq`{
  title,
  text[] ${portableTextQuery},
  ctaLink ${flexibleLinkQuery}
}
`
