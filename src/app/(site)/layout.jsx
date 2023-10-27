import { settingsQuery } from '@/lib/queries'
import { sanityFetch } from '@/lib/sanity.fetch'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import getPreview from '@/lib/getPreview'
import ExitPreview from '@/components/preview/ExitPreview'

export default async function BaseLayout({ children }) {
  const preview = getPreview()
  const settings = await sanityFetch({ query: settingsQuery, tags: ['settings'] })
  // test

  return (
    <>
      <Menu data={settings?.menu} />
      {children}
      {preview && <ExitPreview />}
      <Footer data={settings?.footer} />
    </>
  )
}
