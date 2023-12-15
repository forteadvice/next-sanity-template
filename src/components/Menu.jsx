import Link from 'next/link'
import MainContentLink from './globals/MainContentLink'

export default function Menu({ data }) {
  return (
    <nav className='flex gap-4'>
      <Link href={'/'} prefetch={false}>
        Home
      </Link>

      {data?.links?.map((link) => {
        return (
          <Link key={link?._key} href={`/${link?.slug}`}>
            {link?.title}
          </Link>
        )
      })}
    </nav>
  )
}
