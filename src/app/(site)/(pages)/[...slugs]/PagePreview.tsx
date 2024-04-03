'use client'

import dynamic from 'next/dynamic'
import type { QueryResponseInitial } from '@sanity/react-loader'
import type { TPage } from '@/sanity/queries/documentQueries/page'
import { usePage } from '@/sanity/loader/useQueries'
const PageView = dynamic(() => import('./PageView'))

type Props = {
  initial: QueryResponseInitial<TPage>
  slugs: string[]
}

export default function PagePreview({ initial, slugs }: Props) {
  const { data, encodeDataAttribute } = usePage(initial, slugs)
  return <PageView data={data} />
}
