import '../../styles/globals.css'

import isDraftMode from '@/lib/isDraftMode'
import Menu from '@/components/global/Menu'
import Footer from '@/components/global/Footer'
import ExitPreviewButton from '@/components/global/ExitPreviewButton'
import { loadSettings } from '@/sanity/lib/loaders/load.settings'

type Props = { children: React.ReactNode }
export default async function BaseLayout({ children }: Props) {
  const settings = await loadSettings()
  const { menu, footer } = settings

  return (
    <html lang='en'>
      <body>
        {menu && <Menu {...menu} />}
        {children}
        {footer && <Footer {...footer} />}
        {isDraftMode() && <ExitPreviewButton />}
      </body>
    </html>
  )
}
