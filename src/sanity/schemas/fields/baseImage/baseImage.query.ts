import { groq } from 'next-sanity'

/**
 * baseImageQuery
 * @description Basic sanity image with hotspot options, cropping and alt-text
 */
export const baseImageQuery = groq`{
  hotspot,
  crop,
  alt,
  asset->
}`
