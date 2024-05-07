import { notFound } from 'next/navigation'
import getMetaObject from '@/lib/getMetaObject'
import { loadPage, loadPagesParams } from '@/sanity/lib/loaders/load.page'
import PageView from './PageView'

type Props = {
  params: { slugs: string[] }
}

export async function generateStaticParams() {
  return await loadPagesParams()
}

export async function generateMetadata({ params }: Props) {
  const { slugs } = params
  const page = await loadPage(slugs)
  if (!page?.seo) return
  return getMetaObject(page?.seo)
}

export default async function Page({ params }: Props) {
  const { slugs } = params
  const page = await loadPage(slugs)
  if (!page) return notFound()
  return <PageView {...page} />
}
