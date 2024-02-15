// import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

import getMetaObject from '@/lib/getMetaObject'
import { loadFrontpage } from '@/sanity/loader/loadFunctions'
import FrontpageView from './FrontpageView'
// import isDraftMode from '@/lib/isDraftMode'

// const FrontpagePreview = dynamic(() => import('./FrontpagePreview'))

export async function generateMetadata() {
  const { data } = await loadFrontpage()
  if (!data?.seo) return
  return getMetaObject(data?.seo)
}

export default async function Home() {
  const initial = await loadFrontpage()
  if (!initial?.data) return notFound()
  // if (isDraftMode()) return <FrontpagePreview initial={initial} />
  return <FrontpageView data={initial.data} />
}
