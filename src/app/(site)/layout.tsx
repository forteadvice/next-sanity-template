import '../../styles/globals.css'

import dynamic from 'next/dynamic'

import isDraftMode from '@/lib/isDraftMode'
import Menu from '@/components/global/Menu'
import Footer from '@/components/global/Footer'
import { loadSettings } from '@/sanity/loader/loadFunctions'

const LiveVisualEditing = dynamic(() => import('@/sanity/loader/LiveVisualEditing'))
const MenuPreview = dynamic(() => import('@/components/global/MenuPreview'))
const FooterPreview = dynamic(() => import('@/components/global/FooterPreview'))

export default async function BaseLayout({ children }: any) {
  const initial = await loadSettings()
  const { data: settings } = initial

  return (
    <html lang='en'>
      <body>
        {isDraftMode() ? (
          <>
            <MenuPreview initial={initial} />
            {children}
            <FooterPreview initial={initial} />
            <LiveVisualEditing />
          </>
        ) : (
          <>
            <Menu data={settings?.menu} />
            {children}
            <Footer data={settings?.footer} />
          </>
        )}
      </body>
    </html>
  )
}
