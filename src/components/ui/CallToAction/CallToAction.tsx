type Props = {
  image?: string
  video?: string
  heading?: string
  subHeading?: string
  button?: React.ReactNode
  body?: React.ReactNode
}

export default function CallToAction(props: Props) {
  const { image, video, heading, subHeading, button, body } = props

  return (
    <section
      className={`relative ${image ? 'bg-center bg-cover' : ''} grid gap-y-8 py-32 text-center ${!video ? 'bg-emerald-100' : ''}`}
      style={{ backgroundImage: image ? `url(${image})` : 'none' }}
    >
      {heading && <h1 className='text-6xl font-semibold'>{heading}</h1>}
      {subHeading && <h2 className='text-4xl font-semibold'>{subHeading}</h2>}
      {body && <div className='max-w-96 mx-auto'>{body}</div>}
      {button && <div>{button}</div>}

      {video && (
        <video
          className='-z-[1] absolute w-full h-full object-cover left-0 right-0 bottom-0 top-0'
          autoPlay
          loop
          muted
        >
          <source src={video} type='video/mp4' />
        </video>
      )}
    </section>
  )
}
