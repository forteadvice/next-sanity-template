import Link from 'next/link'
import { TMenu } from '@/sanity/schemas/singletons/settings'

type Props = {
  data: TMenu
}

export default function Menu({ data }: Props) {
  return (
    <nav className='flex gap-4'>
      <Link href={'/'} prefetch={false}>
        Home
      </Link>

      {data?.links?.map((link) => {
        return (
          <Link key={link?._key} href={`/${link?.path}`}>
            {link?.title}
          </Link>
        )
      })}
    </nav>
  )
}
