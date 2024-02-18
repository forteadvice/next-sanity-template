import Image from 'next/image'
import getSanityImageSrc from '@/lib/getSanityImageSrc'
import type { TBaseImage } from '@/sanity/schemas/objects/baseImage'

type Props = {
  imageObj?: TBaseImage
  width: number | `${number}`
  height: number | `${number}`
  [key: string]: any
}

export default function BaseImage({ imageObj, height, width, ...rest }: Props) {
  if (!imageObj?.alt) return
  const src = getSanityImageSrc(imageObj, width, height)
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
