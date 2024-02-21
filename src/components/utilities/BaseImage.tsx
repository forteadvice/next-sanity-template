import { getImageProps } from 'next/image'
import getSanityImageSrc from '@/lib/getSanityImageSrc'
import type { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import type { TBaseImage } from '@/sanity/schemas/objects/baseImage'

type Props = {
  imageObj?: TBaseImage
  width: number
  sizes?: string
  aspectRatio: number | 'as-is'
  aspectRatioDesktop?: number
  priority?: boolean
  className?: string
}
/**
 * @example
 * <BaseImage
 *   imageObj={data?.image}
 *   width={1400}
 *   aspectRatio={1}
 *   aspectRatioDesktop={16 / 9}
 *   sizes={'(max-width: 1400px) 100vw, 1400px'}
 * />
 */
export default function BaseImage({
  imageObj,
  width,
  aspectRatio,
  aspectRatioDesktop,
  sizes,
  priority = false,
  className,
}: Props) {
  // No alt, no img
  if (!imageObj?.alt) return

  // Get common props, used by all sizes
  const common = { width, sizes, quality: 70, alt: imageObj.alt }

  // Get init image props (default image)
  const r = aspectRatio === 'as-is' ? imageObj.asset.metadata.dimensions.aspectRatio : aspectRatio
  const height = Math.round(width / r)
  const {
    props: { ...initProps },
  } = getImageProps({
    ...common,
    height: height,
    src: getSanityImageSrc(imageObj, width, height),
    placeholder: 'blur' as PlaceholderValue,
    blurDataURL: imageObj.asset.metadata.lqip,
    priority,
  })

  // Return picture with desktop source if set
  return (
    <picture>
      {aspectRatioDesktop && <Source media='(min-width: 1024px)' ratio={aspectRatioDesktop} />}
      <img {...initProps} className={`w-full h-auto ${className ?? ''}`} />
    </picture>
  )

  /**
   * Source tag generator
   */
  function Source({ media, ratio }: { media: string; ratio: number }) {
    if (!imageObj) return
    const height = Math.round(width / ratio)
    const src = getSanityImageSrc(imageObj, width, height)
    const props = getImageProps({ ...common, height, src }).props

    return <source media={media} width={props.width} height={props.height} srcSet={props.srcSet} />
  }
}
