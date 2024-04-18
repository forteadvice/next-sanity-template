import BaseImage from '../../utilities/BaseImage'
import type { THero } from '@/sanity/schemas/objects/hero/hero.props'

type Props = {
  data: THero
}

export default function Hero({ data }: Props) {
  return (
    <section className='hero'>
      <h1 className='text-6xl lg:text-7xl font-bold'>{data?.title}</h1>
      <p className='text-lg md:text-xl mt-2 font-semibold'>{data?.tagline}</p>
      {data?.image && (
        <BaseImage
          imageObj={data?.image}
          width={1400}
          aspectRatio={3 / 4}
          aspectRatioDesktop={16 / 9}
          sizes={'(max-width: 1400px) 100vw, 1400px'}
        />
      )}
    </section>
  )
}
