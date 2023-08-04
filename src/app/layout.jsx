import './globals.css'

import { getCachedClient } from '@/lib/getClient'
import { settingsQuery } from '@/lib/queries'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import { headers } from 'next/headers'

export default async function RootLayout({ children }) {
  // Sanity studio layout TODO RM
  if (isStudio(headers())) {
    return (
      <html lang='en'>
        <body>{children}</body>
      </html>
    )
  }

  const settings = await getCachedClient()(settingsQuery)

  return (
    <html lang='en'>
      <body>
        <Menu data={settings?.menu} />
        {children}
        <Footer data={settings?.footer} />
      </body>
    </html>
  )
}

function isStudio(headers) {
  const url = headers.get('x-invoke-path') || ''
  const firstPath = url.split('/')[1] || ''
  return firstPath == 'studio'
}
