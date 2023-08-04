'use client'

import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { getClient } from '@/lib/getClient'

export default function SanityImage({ imageObj, heightRatio, width, ...rest }) {
  const config = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width(options.width)
      .height(Math.round(options.width * heightRatio))
      .fit('crop')
      .quality(75)
  }

  const imageProps = useNextSanityImage(getClient(), imageObj, { imageBuilder: config })

  return (
    <Image
      {...imageProps}
      {...rest}
      width={width}
      height={Math.round(width * heightRatio)}
      alt={imageObj?.alt}
      placeholder={imageObj?.asset?.metadata?.lqip ? 'blur' : undefined}
      blurDataURL={imageObj?.asset?.metadata?.lqip ?? undefined}
    />
  )
}
