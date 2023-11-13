import Image from 'next/image'
import { client } from '@/lib/sanity.client'
import imageUrlBuilder from '@sanity/image-url'
export default function SanityImage({ imageObj, height, width, ...rest }) {
  const { hotspot } = imageObj
  let src = undefined
  if (hotspot) {
    src = urlFor(imageObj)
      .quality(100)
      .dpr(2)
      .width(width)
      .height(height)
      .focalPoint(hotspot.x, hotspot.y)
      .fit('crop')
      .url()
  } else {
    src = urlFor(imageObj).quality(100).dpr(2).width(width).height(height).url()
  }
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={imageObj?.alt}
      {...rest}
      placeholder={imageObj?.asset?.metadata?.lqip ? 'blur' : undefined}
      blurDataURL={imageObj?.asset?.metadata?.lqip ?? undefined}
    />
  )
}
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}
