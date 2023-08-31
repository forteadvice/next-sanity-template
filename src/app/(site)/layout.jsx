import { settingsQuery } from '@/lib/queries'
import { sanityFetch } from '@/lib/sanity.fetch'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

export default async function BaseLayout({ children }) {
  const settings = await sanityFetch({ query: settingsQuery, tags: ['settings'] })

  return (
    <>
      <Menu data={settings?.menu} />
      {children}
      <Footer data={settings?.footer} />
    </>
  )
}
