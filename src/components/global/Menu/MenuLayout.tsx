import Link from 'next/link'

import type { TMenu, TMenuItem } from '@/sanity/schemas/singletons/settings'

type Props = { data: TMenu }

// The menu bar
export default function MenuLayout({ data }: Props) {
  return (
    <nav className='flex gap-4'>
      <Link href={'/'} prefetch={false}>
        Home
      </Link>

      {data?.menuItems?.map((item) => {
        return <MenuItem key={item._key} />
      })}
    </nav>
  )
}

// Single menu item
function MenuItem({ title, link }: TMenuItem) {
  if (link?.internal) {
    return (
      <Link href={link.internal.path} prefetch={false}>
        {title}
      </Link>
    )
  }
  if (link?.external) {
    return <a href={link.external}>{title}</a>
  }
}
