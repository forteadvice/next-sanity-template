import Link from 'next/link'

export default function Menu({ data }) {
  return (
    <nav className='flex gap-4'>
      <Link href={'/'} prefetch={false}>
        Home
      </Link>

      {data?.links?.map((link) => {
        console.log({link})
        return (
          <Link key={link?._key} href={`/${link?.path}`} >
            {link?.title}
          </Link>
        )
      })}
    </nav>
  )
}
