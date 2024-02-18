'use client'

import dynamic from 'next/dynamic'

import type { QueryResponseInitial } from '@sanity/react-loader'
import type { TFrontPage } from '@/sanity/schemas/singletons/frontpage'

import { useFrontpage } from '@/sanity/loader/useFunctions'

const FrontpageView = dynamic(() => import('./FrontpageView'))

type Props = { initial: QueryResponseInitial<TFrontPage> }

export default function FrontpagePreview({ initial }: Props) {
  const { data, encodeDataAttribute } = useFrontpage(initial)
  return <FrontpageView data={data} />
}
