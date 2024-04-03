import type { TFooter } from '@/sanity/queries/documentQueries/settings'

type Props = { data: TFooter }

export default function FooterLayout({ data }: Props) {
  return (
    <footer>
      <address>{data?.address}</address>
      <p>{data?.phone}</p>
      <p>{data?.email}</p>
    </footer>
  )
}
