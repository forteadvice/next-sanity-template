import type { Image, ImageAsset } from 'sanity'

export type TSeo = {
  title?: string
  description?: string
  image?: {
    asset: ImageAsset
  } & Image
}
