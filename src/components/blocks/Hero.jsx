import SanityImage from '../SanityImage'

export default function Hero({ data }) {
  return (
    <section>
      <h1 className='text-6xl font-bold'>{data?.title}</h1>
      <p className='text-xl font-semibold'>{data?.tagline}</p>
      <SanityImage
        imageObj={data?.image}
        heightRatio={1 / 1}
        width={500}
        sizes={'(max-width: 500x) 100vw, 500px'}
      />
    </section>
  )
}
