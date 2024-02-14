'use client'

import type { QueryResponseInitial } from '@sanity/react-loader'
import type { TFrontPage } from '@/sanity/schemas/singletons/frontpage'
import { useFrontpage } from '@/sanity/loader/useFunctions'
import Frontpage from './FrontpageView'

type Props = {
  initial: QueryResponseInitial<TFrontPage>
}

export default function FrontpagePreview({ initial }: Props) {
  const { data, encodeDataAttribute } = useFrontpage(initial)
  return <Frontpage data={data} />
}
