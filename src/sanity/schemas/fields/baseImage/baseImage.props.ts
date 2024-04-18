import type { Image, ImageAsset } from 'sanity'

export type TBaseImage = {
  alt?: string
  asset?: ImageAsset
} & Image
