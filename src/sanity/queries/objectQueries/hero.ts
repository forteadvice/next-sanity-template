import { groq } from 'next-sanity'
import { baseImageQuery, type TBaseImage } from '../fieldQueries/baseImage'

export const heroQuery = groq`{
  headline,
  manchet,
  image ${baseImageQuery},
}`

export type THero = {
  headline?: string
  manchet?: string
  image?: TBaseImage
}
