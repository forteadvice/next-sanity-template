import type { Image, ImageAsset } from 'sanity'

type ImageObj = {
  asset: ImageAsset
} & Image

type Props = {
  imageObj: ImageObj
  width: number | `${number}`
  height: number | `${number}`
}

export default function getSanityImageSrc({ imageObj, width, height }: Props) {
  const { hotspot, asset } = imageObj
  const cropParams = generateRect(imageObj)
  const hotspotParams = hotspot ? `&fp-x=${hotspot.x}&fp-y=${hotspot.y}` : ''
  const src = `${asset.url}?w=${width}&h=${height}&fit=crop&dpr=2&q=100${cropParams}${hotspotParams}`
  return src
}

function generateRect(imageObj: ImageObj) {
  if (!imageObj.crop) return ''

  const { left, right, top, bottom } = imageObj.crop
  const { width, height } = imageObj.asset.metadata.dimensions

  const l = Math.round(left * width)
  const t = Math.round(top * height)
  const w = Math.round(width - l - right * width)
  const h = Math.round(height - t - bottom * height)
  return `&rect=${l},${t},${w},${h}`
}
