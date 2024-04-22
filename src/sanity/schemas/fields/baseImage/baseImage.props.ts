import type { Image, ImageDimensions } from 'sanity'

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
