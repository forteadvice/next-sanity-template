import { groq } from 'next-sanity'
import type { Image, ImageDimensions } from 'sanity'

export const seoQuery = groq`{
  title,
  description,
  image {
    hotspot,
    crop,
    asset->{
    url,
    metadata {
      dimensions,
      lqip,
    }
  }
  },
}`

export type TSeo = {
  title?: string
  description?: string
  image?: {
    asset?: {
      url: string
      metadata: {
        dimensions: ImageDimensions
        lqip: string
      }
    }
  } & Image
}
