'use client'

import { useSettings } from '@/sanity/loader/useFunctions'

import Footer from './Footer'

export default function FooterPreview({ initial }) {
  const { data: settings } = useSettings(initial)
  return <Footer data={settings?.footer} />
}
