import { cn } from '@/lib/utils'

export type TCarouselSlide = {
  active?: boolean
  imgSrc: string
  link: {
    href: string
    title: string
  }
}

export default function CarouselSlide({ active, imgSrc, link }: TCarouselSlide) {
  const { href, title } = link
  return (
    <div
      className={cn('relative grid', {
        'pointer-events-none': !active,
      })}
      aria-hidden={!active}
    >
      <a href={href} title={title} tabIndex={active ? 0 : -1}>
        <img src={imgSrc} alt={title} />
      </a>
    </div>
  )
}
