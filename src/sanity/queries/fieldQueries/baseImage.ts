import { groq } from 'next-sanity'
import type { Image, ImageDimensions } from 'sanity'

/**
 * baseImageQuery
 * @description Basic sanity image with hotspot options, cropping and alt-text
 */
export const baseImageQuery = groq`{
  hotspot,
  crop,
  alt,
  asset->{
    url,
    metadata {
      dimensions,
      lqip,
    }
  }
}`

export type TBaseImage = {
  alt?: string
  asset?: {
    url: string
    metadata: {
      dimensions: ImageDimensions
      lqip: string
    }
  }
} & Image
