import Link, { type LinkProps } from 'next/link'
import { cn } from '@/lib/cn'
import { resolveLinkTarget } from '@/lib/resolveLinkTarget'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

export default function InlineLink({ children, className, href, ...rest }: Props) {
  const linkClasses = cn('underline', className)

  return (
    <Link
      className={linkClasses}
      href={href}
      target={resolveLinkTarget(href)}
      prefetch={false}
      {...rest}
    >
      {children}
    </Link>
  )
}
