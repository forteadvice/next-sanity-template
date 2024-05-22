import Link, { LinkProps } from 'next/link'
import { cn } from '@/lib/cn'

type HTMLButtonProps = {
  href?: never
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type NextJSAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

type ButtonProps = NextJSAnchorProps | HTMLButtonProps

/**
 * Primary action button. Can be rendered as button or Link
 */
export default function Button({ children, href, className, ...rest }: ButtonProps) {
  const buttonStyle = cn(
    'button py-2 px-4 bg-black text-white rounded-full hover:bg-opacity-80',
    className,
  )

  if (href) {
    const targetBlank = !href.startsWith('/')

    return (
      <Link
        className={buttonStyle}
        href={href}
        target={targetBlank ? '_blank' : undefined}
        {...(rest as Omit<NextJSAnchorProps, 'href'>)}
      >
        {children}
      </Link>
    )
  }

  if (!href) {
    return (
      <button className={buttonStyle} {...(rest as HTMLButtonProps)}>
        {children}
      </button>
    )
  }
}
