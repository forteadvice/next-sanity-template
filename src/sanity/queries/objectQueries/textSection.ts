import { groq } from 'next-sanity'
import { portableTextQuery, type TPortableText } from '../fieldQueries/portableText'

export const textSectionQuery = groq`{
  title,
  text[] ${portableTextQuery},
}
`

export type TTextSection = {
  title?: string
  text?: TPortableText
}
