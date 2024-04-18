import Link from 'next/link'

import type { TMenu, TMenuItem } from '@/sanity/schemas/documents/settings/settings.props'

type Props = { data: TMenu }

// The menu bar
export default function MenuLayout({ data }: Props) {
  return (
    <nav className='flex gap-4'>
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
function MenuItem({ title, link }: TMenuItem) {
  if (link?.internal?.path) {
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
