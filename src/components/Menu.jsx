import Link from 'next/link'

export default function Menu({ data }) {
  return (
    <nav className='flex gap-4'>
      <Link href={'/'} prefetch={false}>
        Home
      </Link>

      {data?.links?.map((link) => {
        return <Link href={`/${link?.slug}`}>{link?.title}</Link>
      })}
    </nav>
  )
}
