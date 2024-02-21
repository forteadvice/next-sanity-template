import dynamic from 'next/dynamic'
import isDraftMode from '@/lib/isDraftMode'

import { loadSettings } from '@/sanity/loader/loadQueries'
import MenuLayout from './MenuLayout'
const MenuPreview = dynamic(() => import('./MenuPreview'))

export default async function Menu() {
  const initial = await loadSettings()
  if (!initial.data.menu) return
  if (isDraftMode()) return <MenuPreview initial={initial} />
  return <MenuLayout data={initial.data.menu} />
}
