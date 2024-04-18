import { groq } from 'next-sanity'
import { portableTextQuery } from '../../fields/portableText/portableText.query'

export const textSectionQuery = groq`{
  title,
  text[] ${portableTextQuery},
}
`
