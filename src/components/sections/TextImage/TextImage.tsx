import type { TTextImage } from '@/sanity/schemas/objects/textImage/textImage.props'
import BaseImage from '@/components/utilities/BaseImage/BaseImage'
import TextSection from '../TextSection/TextSection'

export default function TextImage(props: TTextImage) {
  const { textSection, image, layout } = props

  return (
    <article className={`text-image md:grid grid-cols-2`}>
      <div className={`${layout == 'textImage' ? 'order-2' : ''}`}>
        <BaseImage
          imageObj={image}
          width={500}
          aspectRatio={1}
          sizes={'(max-width: 500x) 100vw, 500px'}
        />
      </div>

      <div className='flex-1 w-full'>{textSection && <TextSection {...textSection} />}</div>
    </article>
  )
}
