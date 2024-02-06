import TextSection from './TextSection'
import SanityImage from '../utilities/SanityImage'

export default function TextImage({ data }) {
  const { textSection, image, layout } = data
  const flexDirection = layout == 'imageText' ? 'md:flex' : 'md:flex-row-reverse'

  return (
    <article className={`text-image md:flex flex ${flexDirection}`}>
      <div>
        <SanityImage
          imageObj={image}
          width={500}
          height={500}
          sizes={'(max-width: 500x) 100vw, 500px'}
        />
      </div>
      <div>
        <TextSection data={textSection} mt={false} mb={false} />
      </div>
    </article>
  )
}
