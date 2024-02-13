export const dynamic = 'force-dynamic'

import { draftMode } from 'next/headers'
import dynamicLoad from 'next/dynamic'
import { notFound } from 'next/navigation'

import getMetaObject from '@/lib/getMetaObject'
import { loadFrontpage } from '@/sanity/loader/loadFunctions'
import FrontpageView from './FrontpageView'

const FrontpagePreview = dynamicLoad(() => import('./FrontpagePreview'))

export async function generateMetadata() {
  const { data } = await loadFrontpage()
  return getMetaObject(data?.seo)
}

export default async function Home() {
  const initial = await loadFrontpage()
  if (!initial?.data) return notFound()
  if (draftMode().isEnabled) return <FrontpagePreview initial={initial} />
  return <FrontpageView data={initial.data} />
}
