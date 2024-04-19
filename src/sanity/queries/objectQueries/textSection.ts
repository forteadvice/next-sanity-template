import { groq } from 'next-sanity'
import { portableTextQuery, type TPortableText } from '@/sanity/queries/fieldQueries/portableText'
import { flexibleLinkQuery, TFlexibleLink } from '@/sanity/queries/fieldQueries/flexibleLink'

export const textSectionQuery = groq`{
  title,
  text[] ${portableTextQuery},
  ctaLink ${flexibleLinkQuery}
}
`

export type TTextSection = {
  title?: string
  text?: TPortableText
  ctaLink?: TFlexibleLink
}
