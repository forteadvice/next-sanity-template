import { groq } from 'next-sanity'
import type { Image, ImageAsset } from 'sanity'

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

export type TBaseImage = {
  alt?: string
  asset?: ImageAsset
} & Image
