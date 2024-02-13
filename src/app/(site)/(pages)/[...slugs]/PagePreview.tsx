'use client'

import type { QueryResponseInitial } from '@sanity/react-loader'
import type { TPage } from '@/sanity/schemas/documents/page'
import { usePage } from '@/sanity/loader/useFunctions'
import PageView from './PageView'

type Props = {
  initial: QueryResponseInitial<TPage>
  slugs: string[]
}

export default function PagePreview({ initial, slugs }: Props) {
  const { data, encodeDataAttribute } = usePage(initial, slugs)
  return <PageView data={data} />
}
