import SanityImage from '../SanityImage'

export default function MainImage({ data }) {
  console.log(data)
  return (
    <figure className='main-image'>
      <SanityImage
        imageObj={data}
        width={700}
        heightRatio={1 / 1.5}
        sizes={'(max-width: 700x) 100vw, 700px'}
      />
      <figcaption className='mt-2'>{data.caption}</figcaption>
    </figure>
  )
}
