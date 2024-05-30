import type { TFooter } from '@/sanity/schemas/documents/settings/settings.props'

export default function FooterLayout(props: TFooter) {
  const { address, phone, email } = props
  return (
    <footer className='footer p-4'>
      <address>{address}</address>
      <p>{phone}</p>
      <p>{email}</p>
    </footer>
  )
}
