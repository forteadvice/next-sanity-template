import { notFound } from 'next/navigation'
import {type TPageParams, loadPageParams} from '@/sanity/queries/getPagesParams'
import { loadPage } from '@/sanity/queries'
import { getMetaObject } from '@/sanity/queries/getMetaObject'
import Page from '@/components/views/page/Page'
import { draftMode } from 'next/headers'
import dynamic from 'next/dynamic'


const PagePreview = dynamic(() => import('@/components/views/page/PagePreview'))

export async function generateStaticParams() {
  const pages = await loadPageParams()
  return pages
}

export async function generateMetadata({ params }: {params: TPageParams}) {
  const {data} = await loadPage(params)
  return getMetaObject(data)
}

export default async function RenderPage({ params }: {params: TPageParams}) {
  const initial = await loadPage(params)
  if (draftMode().isEnabled) {
    return <PagePreview params={params} initial={initial} />
  }

  if (!initial) {
    return notFound()
  }

  return <Page data={initial?.data} />
}
