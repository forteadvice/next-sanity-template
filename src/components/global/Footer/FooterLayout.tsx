import type { TFooter } from '@/sanity/schemas/documents/settings/settings.props'

type Props = { data: TFooter }

export default function FooterLayout({ data }: Props) {
  const { address, phone, email } = data
  return (
    <footer className='footer p-4'>
      <address>{address}</address>
      <p>{phone}</p>
      <p>{email}</p>
    </footer>
  )
}
