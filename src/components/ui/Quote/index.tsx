import Image from 'next/image'

type Props = {
  children?: React.ReactNode
  image?: string
  name?: string
  heading?: string
  subHeading?: string
}

export default function Quote(props: Props) {
  const { children, image, name, heading, subHeading } = props

  return (
    <blockquote className='border-l-[6px] box-border p-5'>
      <div className="before:content-['“'] after:content-['“'] text-2xl sm:text-3xl md:text-3xl lg:text-5xl py-5 ml-4 text-slate-600">
        {children}
      </div>
      {(name || heading || subHeading || image) && (
        <QuoteCredits {...{ image, name, heading, subHeading }} />
      )}
    </blockquote>
  )
}

function QuoteCredits(props: Omit<Props, 'children'>) {
  const { image, name, heading, subHeading } = props

  return (
    <div className='flex flex-col sm:flex-row sm:justify-end sm:items-center  pl-5 sm:pl-0'>
      {image && (
        <div className=''>
          <Image
            className='rounded-full'
            src={image}
            width={64}
            height={64}
            alt={name || 'Profile'}
          />
        </div>
      )}
      <div className='flex flex-col sm:pl-4 pt-2 sm:pt-0'>
        {name && <p className='text-sm sm:text-lg font-semibold'>{name}</p>}
        {heading && <p className='text-xs sm:text-sm font-semibold italic'>{heading}</p>}
        {subHeading && <p className='text-xs italic'>{subHeading}</p>}
      </div>
    </div>
  )
}
