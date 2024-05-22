import { cn } from '@/lib/cn'

type Props = {
  variant: 'title' | 'extra-large' | 'large' | 'medium' | 'small' | 'extra-small'
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Heading({ variant, tag: Tag, children, className, id }: Props) {
  const tagClasses = cn(
    'font-medium text-balance',
    {
      'text-5xl lg:text-6xl': variant == 'title',
      'text-4xl lg:text-5xl': variant == 'extra-large',
      'text-3xl lg:text-4xl': variant == 'large',
      'text-2xl lg:text-3xl': variant == 'medium',
      'text-xl lg:text-2xl': variant == 'small',
      'text-lg lg:text-xl leading-none': variant == 'extra-small',
    },
    className,
  )

  return (
    <Tag className={tagClasses} id={id}>
      {children}
    </Tag>
  )
}
