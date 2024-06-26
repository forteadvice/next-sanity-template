import { groq } from 'next-sanity'
import { baseImageQuery } from '../../fields/baseImage/baseImage.query'

export const heroQuery = groq`{
  headline,
  manchet,
  image ${baseImageQuery}
}`
