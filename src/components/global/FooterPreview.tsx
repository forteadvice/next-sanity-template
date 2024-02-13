'use client'

import type { QueryResponseInitial } from '@sanity/react-loader'
import type { TSettings } from '@/sanity/schemas/singletons/settings'

import { useSettings } from '@/sanity/loader/useFunctions'
import Footer from './Footer'

type Props = {
  initial: QueryResponseInitial<TSettings>
}

export default function FooterPreview({ initial }: Props) {
  const { data: settings } = useSettings(initial)
  if (!settings.footer) return
  return <Footer data={settings?.footer} />
}
