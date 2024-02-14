import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

import isDraftMode from '@/lib/isDraftMode'
import getMetaObject from '@/lib/getMetaObject'
import { loadPage, loadPagesParams } from '@/sanity/loader/loadFunctions'
import PageView from './PageView'
const PagePreview = dynamic(() => import('./PagePreview'))

type Props = {
  params: { slugs: string[] }
}

export async function generateStaticParams() {
  const { data: pages } = await loadPagesParams()
  return pages
}

export async function generateMetadata({ params }: Props) {
  const { slugs } = params
  const { data } = await loadPage(slugs)
  if (!data?.seo) return
  return getMetaObject(data?.seo)
}

export default async function Page({ params }: Props) {
  const { slugs } = params
  const initial = await loadPage(slugs)
  if (!initial?.data) return notFound()
  if (isDraftMode()) return <PagePreview initial={initial} slugs={slugs} />
  return <PageView data={initial?.data} />
}
