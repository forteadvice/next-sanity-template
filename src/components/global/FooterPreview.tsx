'use client'

import dynamic from 'next/dynamic'

import type { QueryResponseInitial } from '@sanity/react-loader'
import type { TSettings } from '@/sanity/schemas/singletons/settings'

import { useSettings } from '@/sanity/loader/useQueries'
const Footer = dynamic(() => import('./Footer/FooterLayout'))

type Props = {
  initial: QueryResponseInitial<TSettings>
}

export default function FooterPreview({ initial }: Props) {
  const { data: settings } = useSettings(initial)
  if (!settings.footer) return
  return <Footer data={settings?.footer} />
}
