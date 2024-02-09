'use client'

// import { type QueryResponseInitial } from '@sanity/react-loader'
import { useFrontpage } from '@/sanity/loader/useFunctions'
import Frontpage from './FontpageView'

export default function FrontpagePreview({ initial }: any) {
  const { data, encodeDataAttribute } = useFrontpage(initial)
  return <Frontpage data={data} />
}
