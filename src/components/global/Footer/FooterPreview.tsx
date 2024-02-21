'use client'

import dynamic from 'next/dynamic'
import { useSettings } from '@/sanity/loader/useQueries'
const FooterLayout = dynamic(() => import('./FooterLayout'))

type Props = {
  initial: Parameters<typeof useSettings>[0]
}

export default function FooterPreview(props: Props) {
  const { data } = useSettings(props.initial)
  if (!data.footer) return
  return <FooterLayout data={data.footer} />
}
