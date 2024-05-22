import Link, { type LinkProps } from 'next/link'
import { cn } from '@/lib/cn'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

export default function InlineLink({ children, className, href, ...rest }: Props) {
  const linkClasses = cn('underline', className)

  const targetBlank = !href.startsWith('/')

  return (
    <Link
      className={linkClasses}
      href={href}
      target={targetBlank ? '_blank' : undefined}
      prefetch={false}
      {...rest}
    >
      {children}
    </Link>
  )
}
