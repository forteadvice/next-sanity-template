import { groq } from 'next-sanity'
import type { Image, ImageAsset } from 'sanity'

export const seoQuery = groq`{
  title,
  description,
  image {
    hotspot,
    crop,
    asset->,
  },
}`

export type TSeo = {
  title?: string
  description?: string
  image?: {
    asset: ImageAsset
  } & Image
}
