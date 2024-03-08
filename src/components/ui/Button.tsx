import Link from 'next/link'

type Props = {
  title: string
  href?: string
}

export default function Button({ title, href }: Props) {
  const baseStyle = 'block py-2 px-3 bg-black text-white'

  // No href, return button
  if (!href) return <button className={baseStyle}>{title}</button>

  // href = internal path
  if (href.startsWith('/'))
    return (
      <Link className={baseStyle} href={href} prefetch={false}>
        {title}
      </Link>
    )

  // href = external path
  return (
    <a href={href} className={baseStyle}>
      {title}
    </a>
  )
}
