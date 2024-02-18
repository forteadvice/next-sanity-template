import '../../styles/globals.css'

import dynamic from 'next/dynamic'

import isDraftMode from '@/lib/isDraftMode'
import Menu from '@/components/global/Menu'
import Footer from '@/components/global/Footer'

const LiveVisualEditing = dynamic(() => import('@/sanity/loader/LiveVisualEditing'))

type Props = { children: React.ReactNode }
export default async function BaseLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <Menu />
        {children}
        <Footer />
        {isDraftMode() && <LiveVisualEditing />}
      </body>
    </html>
  )
}
