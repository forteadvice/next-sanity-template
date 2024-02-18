'use client'

import dynamic from 'next/dynamic'
import { useSettings } from '@/sanity/loader/useFunctions'
const MenuLayout = dynamic(() => import('./MenuLayout'))

type Props = {
  initial: Parameters<typeof useSettings>[0]
}

export default function MenuPreview(props: Props) {
  const { data } = useSettings(props.initial)
  if (!data.menu) return
  return <MenuLayout data={data.menu} />
}
