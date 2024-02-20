import Link from 'next/link'

import type { TMenu } from '@/sanity/schemas/objects/menu'

type Props = {
  data: TMenu
}

export default function MenuLayout({ data }: Props) {
  return (
    <nav className='flex gap-4'>
      <Link href={'/'} prefetch={false}>
        Home
      </Link>

      {data?.links?.map((link) => {
        return (
          <Link key={link._key} href={link.path} prefetch={false}>
            {link.title}
          </Link>
        )
      })}
    </nav>
  )
}
