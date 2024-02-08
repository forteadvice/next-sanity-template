import { draftMode } from 'next/headers'
import dynamic from 'next/dynamic'

import getMetaObject from '@/lib/getMetaObject'
import { loadFrontpage } from '@/lib/sanity/loader/loadFunctions'
import FrontpageView from './FontpageView'

const FrontpagePreview = dynamic(() => import('./FrontpagePreview'))

export async function generateMetadata() {
  const { data } = await loadFrontpage()
  return getMetaObject(data?.seo)
}

export default async function Home() {
  const initial = await loadFrontpage()
  if (draftMode().isEnabled) return <FrontpagePreview initial={initial} />
  return <FrontpageView data={initial.data} />
}
