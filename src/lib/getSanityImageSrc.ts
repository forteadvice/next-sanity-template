import type { Image, ImageAsset } from 'sanity'

type ImageObj = {
  asset?: ImageAsset
} & Image

/**
 * Sanity image URL-resolver
 * @param imageObj Sanity image object: Assets are required, crop and hotspot are optional
 * @param width Image render width
 * @param height Image render height
 */
export default function getSanityImageSrc(imageObj: ImageObj, width: number, height: number) {
  const { hotspot, asset } = imageObj
  const cropParams = generateRect(imageObj)
  const hotspotParams = hotspot ? `&fp-x=${hotspot.x}&fp-y=${hotspot.y}` : ''
  const src = `${asset?.url}?w=${width}&h=${height}&fit=crop&dpr=2&q=100${cropParams}${hotspotParams}`
  return src
}

/**
 * Sanity Image CDN rect param resolver
 * @returns empty string if !crop, or the resolved &rect param
 */
function generateRect(imageObj: ImageObj) {
  if (!imageObj.crop || !imageObj.asset) return ''

  const { left, right, top, bottom } = imageObj.crop
  const { width, height } = imageObj.asset.metadata.dimensions

  const l = Math.round(left * width)
  const t = Math.round(top * height)
  const w = Math.round(width - l - right * width)
  const h = Math.round(height - t - bottom * height)
  return `&rect=${l},${t},${w},${h}`
}
