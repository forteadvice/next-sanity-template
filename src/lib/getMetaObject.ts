import getSanityImageSrc from './getSanityImageSrc'

import type { TSeo } from '@/sanity/queries/objectQueries/seo'
import type { Metadata } from 'next'

export default function getMetaObject(meta: TSeo): Metadata {
  const { title, description, image } = meta
  const ogWidth = 1200
  const ogHeight = 630

  const imageSrc = image ? getSanityImageSrc(image, ogWidth, ogHeight) : undefined

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_PRODUCTION_URL || 'http://localhost:3000'),
    title: title ?? undefined,
    description: description ?? undefined,
    openGraph: {
      images: imageSrc
        ? [
            {
              url: imageSrc,
              width: ogWidth,
              height: ogHeight,
            },
          ]
        : undefined,
    },
  }
}
