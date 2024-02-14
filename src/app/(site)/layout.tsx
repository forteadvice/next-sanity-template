import '../../styles/globals.css'

import dynamic from 'next/dynamic'

import isDraftMode from '@/lib/isDraftMode'
import Menu from '@/components/global/Menu'
import Footer from '@/components/global/Footer'
import { loadSettings } from '@/sanity/loader/loadFunctions'

const LiveVisualEditing = dynamic(() => import('@/sanity/loader/LiveVisualEditing'))
const MenuPreview = dynamic(() => import('@/components/global/MenuPreview'))
const FooterPreview = dynamic(() => import('@/components/global/FooterPreview'))

type Props = {
  children: React.ReactNode
}

export default async function BaseLayout({ children }: Props) {
  const initial = await loadSettings()
  const { data: settings } = initial
  const { menu, footer } = settings

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
            {menu && <Menu data={menu} />}
            {children}
            {footer && <Footer data={footer} />}
          </>
        )}
      </body>
    </html>
  )
}
