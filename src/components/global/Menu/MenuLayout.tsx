import Link from 'next/link'

import type { TMenu, TMenuItem } from '@/sanity/queries/documentQueries/settings'

type Props = { data: TMenu }

// The menu bar
export default function MenuLayout({ data }: Props) {
  return (
    <nav className='menu flex gap-4'>
      <Link href={'/'} prefetch={false}>
        Home
      </Link>

      {data?.menuItems?.map((item, idx) => {
        return <MenuItem {...item} key={idx} />
      })}
    </nav>
  )
}

// Single menu item
function MenuItem({ title, href }: TMenuItem) {
  if (href) {
    return (
      <Link href={href} prefetch={false}>
        {title}
      </Link>
    )
  }
}
