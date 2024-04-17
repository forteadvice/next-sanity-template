import Link, { LinkProps } from 'next/link'
import { cn } from '@/lib/utils'

type ButtonProps = {
  href?: never
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

/**
 * Primary action button. Can be rendered as button or Link
 */
export default function Button({ children, href, className, ...rest }: AnchorProps | ButtonProps) {
  const buttonStyle = cn(
    'block py-2 px-4 bg-black text-white rounded-full hover:bg-opacity-80',
    className,
  )

  if (href) {
    return (
      <Link
        className={buttonStyle}
        href={href}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    )
  }

  if (!href) {
    return (
      <button className={buttonStyle} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    )
  }
}
