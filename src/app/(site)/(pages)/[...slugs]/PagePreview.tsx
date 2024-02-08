'use client'

// import { type QueryResponseInitial } from '@sanity/react-loader'
import { usePage } from '@/lib/sanity/loader/useFunctions'
import PageView from './PageView'

export default function PagePreview({ initial, slugs }: any) {
  const { data, encodeDataAttribute } = usePage(initial, slugs)
  return <PageView data={data} />
}
