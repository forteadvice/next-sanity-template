import getSanityImageSrc from '@/lib/getSanityImageSrc'
import type { TBaseImage } from '@/sanity/schemas/fields/baseImage'
import Image, { getImageProps } from 'next/image'

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
 *   imageObj={data.image}
 *   width={1400}
 *   aspectRatio={3 / 4} // "as-is" will render original image size
 *   aspectRatioDesktop={16 / 9}
 *   sizes={'(max-width: 1400px) 100vw, 1400px'}
 *   priority={true}
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
  if (!imageObj?.asset || !imageObj.alt) return

  const common = { width, sizes, alt: imageObj.alt }
  const r = aspectRatio === 'as-is' ? imageObj.asset.metadata.dimensions.aspectRatio : aspectRatio
  const height = Math.round(width / r)

  return (
    <picture>
      {aspectRatioDesktop && <Source media='(min-width: 640px)' ratio={aspectRatioDesktop} />}
      <Image
        className={className + 'sm:bg-black'}
        src={getSanityImageSrc(imageObj, width, height)}
        height={height}
        placeholder='blur'
        blurDataURL={imageObj.asset.metadata.lqip}
        priority={priority}
        {...common}
      />
    </picture>
  )

  /**
   * Source tag
   */
  function Source({ media, ratio }: { media: string; ratio: number }) {
    if (!imageObj) return
    const height = Math.round(width / ratio)
    const src = getSanityImageSrc(imageObj, width, height)
    const props = getImageProps({ ...common, height, src }).props
    return <source media={media} width={props.width} height={props.height} srcSet={props.srcSet} />
  }
}
