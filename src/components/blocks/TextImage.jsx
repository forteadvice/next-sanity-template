import TextBlock from './TextBlock'
import SanityImage from '../SanityImage'

export default function TextImage({ data }) {
  const { textBlock, image, layout } = data
  const flexDirection = layout == 'imageText' ? 'md:flex' : 'md:flex-row-reverse'

  return (
    <article className={`text-image md:flex flex ${flexDirection}`}>
      <div>
        <SanityImage
          imageObj={image}
          width={500}
          heightRatio={1}
          sizes={'(max-width: 500x) 100vw, 500px'}
        />
      </div>
      <div>
        <TextBlock data={textBlock} mt={false} />
      </div>
    </article>
  )
}
