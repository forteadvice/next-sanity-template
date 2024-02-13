import { TFooter } from '@/sanity/schemas/singletons/settings'

type Props = {
  data: TFooter
}

export default function Footer({ data }: Props) {
  return (
    <footer>
      <address>{data?.address}</address>
      <p>{data?.phone}</p>
      <p>{data?.email}</p>
    </footer>
  )
}
