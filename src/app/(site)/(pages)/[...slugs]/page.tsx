import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

import getMetaObject from '@/lib/getMetaObject'
import { loadPage, loadPagesParams } from '@/sanity/loader/loadFunctions'

import PageView from './PageView'

const PagePreview = dynamic(() => import('./PagePreview'))

export async function generateStaticParams() {
  const { data: pages } = await loadPagesParams()
  return pages
}
export async function generateMetadata({ params }: any) {
  const { slugs } = params
  const { data } = await loadPage(slugs)
  return getMetaObject(data?.seo)
}

export default async function Page({ params }: any) {
  const { slugs } = params
  const initial = await loadPage(slugs)
  if (!initial?.data) return notFound()
  if (draftMode()?.isEnabled) return <PagePreview initial={initial} slugs={slugs} />
  return <PageView data={initial?.data} />
}
