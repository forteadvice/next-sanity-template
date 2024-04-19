import type { Image, ImageDimensions } from 'sanity'

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
