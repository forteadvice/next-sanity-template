// import getMetaObject from '@/lib/getMetaObject'
import { draftMode } from 'next/headers'
import dynamic from 'next/dynamic'

import { loadFrontpage } from '@/lib/sanity/loader/loadFunctions'
import Frontpage from '@/views/Fontpage'
const FrontpagePreview = dynamic(() => import('@/views/FrontpagePreview'))

// export async function generateMetadata() {
//   const data = await getFrontpageData()
//   return getMetaObject(data?.seo)
// }

export default async function Home() {
  const initial = await loadFrontpage()
  if (draftMode().isEnabled) return <FrontpagePreview initial={initial} />
  return <Frontpage data={initial.data} />
}
