import SanityImage from '../utilities/BaseImage'
import type { THero } from '@/sanity/schemas/objects/hero'

type Props = {
  data: THero
}

export default function Hero({ data }: Props) {
  return (
    <section className='hero'>
      <h1 className='text-6xl lg:text-7xl font-bold'>{data?.title}</h1>
      <p className='text-lg md:text-xl mt-2 font-semibold'>{data?.tagline}</p>
      {data?.image && (
        <SanityImage
          imageObj={data?.image}
          height={700}
          width={1400}
          sizes={'(max-width: 1400x) 100vw, 1400px'}
        />
      )}
    </section>
  )
}
