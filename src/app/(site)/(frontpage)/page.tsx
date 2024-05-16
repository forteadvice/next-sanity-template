import { notFound } from 'next/navigation'

import { loadFrontpage } from '@/sanity/lib/loaders/load.frontpage'
import getMetaObject from '@/lib/getMetaObject'
import FrontpageView from './FrontpageView'

export async function generateMetadata() {
  const page = await loadFrontpage()
  if (!page?.seo) return
  return getMetaObject(page?.seo)
}

export default async function Home() {
  const page = await loadFrontpage()
  if (!page) return notFound()
  return <FrontpageView {...page} />
}
