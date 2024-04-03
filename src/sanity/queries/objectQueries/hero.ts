import { groq } from 'next-sanity'
import { baseImageQuery, type TBaseImage } from '../fieldQueries/baseImage'

export const heroQuery = groq`{
  title,
  tagline,
  image ${baseImageQuery}
}`

export type THero = {
  title?: string
  tagline?: string
  image?: TBaseImage
}
