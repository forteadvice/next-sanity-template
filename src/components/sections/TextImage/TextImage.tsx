import type { TTextImage } from '@/sanity/schemas/objects/textImage/textImage.props'
import BaseImage from '../../utilities/BaseImage/BaseImage'
import TextSection from '../TextSection/TextSection'

type Props = {
  data: TTextImage
}

export default function TextImage({ data }: Props) {
  const { textSection, image, layout } = data

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

      <div className='flex-1 w-full'>{textSection && <TextSection data={textSection} />}</div>
    </article>
  )
}
