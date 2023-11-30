import '../../styles/globals.css'

import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import getPreview from '@/lib/getPreview'
import ExitPreview from '@/components/preview/ExitPreview'
import getSettingsData from '@/lib/fetch/getSettingsData'

export default async function BaseLayout({ children }) {
  const preview = getPreview()
  const settings = await getSettingsData()

  return (
    <html lang='en'>
      <body>
        <Menu data={settings?.menu} />
        {children}
        {preview && <ExitPreview />}
        <Footer data={settings?.footer} />
      </body>
    </html>
  )
}
