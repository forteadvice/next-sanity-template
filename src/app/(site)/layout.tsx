import '../../styles/globals.css'

import { draftMode } from 'next/headers'
import dynamic from 'next/dynamic'

import Menu from '@/components/global/Menu'
import Footer from '@/components/global/Footer'
import { loadSettings } from '@/sanity/loader/loadFunctions'

const LiveVisualEditing = dynamic(() => import('@/sanity/loader/LiveVisualEditing'))

export default async function BaseLayout({ children }: any) {
  const initial = await loadSettings()
  const { data: settings } = initial

  return (
    <html lang='en'>
      <body>
        <Menu data={settings?.menu} />
        {children}
        <Footer data={settings?.footer} />
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  )
}
