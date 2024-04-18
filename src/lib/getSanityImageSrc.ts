import type { Image, ImageUrlParams, ImageDimensions } from 'sanity'

type ImageObj = {
  alt?: string
  asset?: {
    url: string
    metadata: {
      dimensions: ImageDimensions
      lqip: string
    }
  }
} & Image

/**
 * Sanity image URL-resolver
 * @param imageObj Sanity image object: Assets are required, crop and hotspot are optional
 * @param width Image render width
 * @param height Image render height
 */
export default function getSanityImageSrc(imageObj: ImageObj, width: number, height: number) {
  const { hotspot, asset } = imageObj
  if (!asset?.url) return ''

  const src = new URL(asset.url)
  const params: ImageUrlParams = {
    w: width,
    h: height,
    fit: 'crop',
    dpr: 2,
    q: 100,
    rect: generateRect(imageObj),
    'fp-x': hotspot?.x,
    'fp-y': hotspot?.y,
  }

  Object.entries(params).forEach(([key, value]) => {
    if (value) src.searchParams.append(key, value)
  })

  return src.toString()
}

/**
 * Sanity Image CDN rect param resolver
 * @returns empty string if !crop, or the resolved &rect param
 */
function generateRect(imageObj: ImageObj): ImageUrlParams['rect'] {
  if (!imageObj.crop || !imageObj.asset || !imageObj.crop) return undefined

  const { left, right, top, bottom } = imageObj.crop
  const { width, height } = imageObj.asset.metadata.dimensions

  const l = Math.round(left * width)
  const t = Math.round(top * height)
  const w = Math.round(width - l - right * width)
  const h = Math.round(height - t - bottom * height)
  return `${l},${t},${w},${h}`
}
