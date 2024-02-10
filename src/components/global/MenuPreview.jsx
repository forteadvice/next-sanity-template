'use client'

import { useSettings } from '@/sanity/loader/useFunctions'

import Menu from './Menu'

export default function MenuPreview({ initial }) {
  const { data: settings } = useSettings(initial)
  return <Menu data={settings?.menu} />
}
