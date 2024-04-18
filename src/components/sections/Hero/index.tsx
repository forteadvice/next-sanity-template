import BaseImage from '../../utilities/BaseImage'
import type { THero } from '@/sanity/queries/objectQueries/hero'

export default function Hero(props: THero) {
  const { headline, manchet, image } = props
  return (
    <section className='hero'>
      <h1 className='text-6xl lg:text-7xl font-bold'>{headline}</h1>
      <p className='text-lg md:text-xl mt-2 font-semibold'>{manchet}</p>
      {image && (
        <BaseImage
          imageObj={image}
          width={680}
          aspectRatio={1 / 1}
          aspectRatioDesktop={16 / 9}
          sizes={'(max-width: 800px) 90vw, 680px'}
        />
      )}
    </section>
  )
}
