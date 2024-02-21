'use client'

import type { QueryResponseInitial } from '@sanity/react-loader'
import type { TSettings } from '@/sanity/schemas/singletons/settings'

import { useSettings } from '@/sanity/loader/useQueries'
import Menu from './Menu/MenuLayout'

type Props = {
  initial: QueryResponseInitial<TSettings>
}

export default function MenuPreview({ initial }: Props) {
  const { data: settings } = useSettings(initial)
  if (!settings?.menu) return
  return <Menu data={settings?.menu} />
}
