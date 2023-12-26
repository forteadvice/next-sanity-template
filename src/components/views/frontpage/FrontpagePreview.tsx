'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

// import { pagesBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import {TFrontpagePayload, frontpageQuery} from '@/sanity/queries/frontPageQuery'
import Frontpage from './Frontpage'

type Props = {
  initial: QueryResponseInitial<TFrontpagePayload | null>
}

export default function PagePreview(props: Props) {
  const { initial } = props
  const { data } = useQuery<TFrontpagePayload | null>(frontpageQuery, {}, {
    initial,
  })
  return <Frontpage data={data!} />
}
