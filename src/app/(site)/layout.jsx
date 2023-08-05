import { getCachedClient } from '@/lib/getClient'
import { settingsQuery } from '@/lib/queries'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

export default async function BaseLayout({ children }) {
  const settings = await getCachedClient()(settingsQuery)

  return (
    <>
      <Menu data={settings?.menu} />
      {children}
      <Footer data={settings?.footer} />
    </>
  )
}
