import SanityImage from '../SanityImage'

export default function MainImage({ data }) {
  return (
    <figure className='main-image'>
      <SanityImage
        imageObj={data}
        width={700}
        height={500}
        sizes={'(max-width: 700x) 100vw, 700px'}
      />
      <figcaption className='mt-2'>{data.caption}</figcaption>
    </figure>
  )
}
