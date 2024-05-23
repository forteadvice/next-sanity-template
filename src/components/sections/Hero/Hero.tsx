import BaseImage from '@/components/utilities/BaseImage/BaseImage'
import type { THero } from '@/sanity/schemas/objects/hero/hero.props'
import Heading from '@/components/ui/Heading/Heading'

export default function Hero(props: THero) {
  const { headline, manchet, image } = props
  return (
    <section className='relative'>
      <div className='absolute m-6 '>
        <Heading tag='h1' variant='title' className='text-white'>
          {headline}
        </Heading>
        <Heading tag='p' variant='extra-small' className='mt-5 text-white'>
          {manchet}
        </Heading>
      </div>
      {image && (
        <BaseImage
          imageObj={image}
          width={2800}
          aspectRatio={1 / 1}
          aspectRatioDesktop={16 / 9}
          sizes={'100vw'}
        />
      )}
    </section>
  )
}
