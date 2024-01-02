'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

// import { pagesBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import {TPagePayload, pageQuery, paramsToParentSlugs} from '@/sanity/queries/pageQuery'
import Page from './Page'
import { TPageParams } from '@/sanity/queries/getPagesParams'

type Props = {
  params: TPageParams
  initial: QueryResponseInitial<TPagePayload | null>
}

export default function PagePreview(props: Props) {
  const { params, initial } = props
  const parentParams = paramsToParentSlugs(params)
  const { data } = useQuery<TPagePayload | null>(pageQuery, parentParams, {
    initial,
  })
  return <Page data={data!} />
}
