import Image from 'next/image'
import getSanityImageSrc from '@/lib/getSanityImageSrc'

export default function SanityImage({ imageObj, height, width, ...rest }) {
  const src = getSanityImageSrc({ imageObj, width, height })
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
