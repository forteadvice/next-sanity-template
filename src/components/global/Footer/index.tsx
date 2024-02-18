import dynamic from 'next/dynamic'
import isDraftMode from '@/lib/isDraftMode'

import { loadSettings } from '@/sanity/loader/loadFunctions'
import FooterLayout from './FooterLayout'
const FooterPreview = dynamic(() => import('./FooterPreview'))

export default async function Footer() {
  const initial = await loadSettings()
  if (!initial.data.footer) return
  if (isDraftMode()) return <FooterPreview initial={initial} />
  return <FooterLayout data={initial.data.footer} />
}
