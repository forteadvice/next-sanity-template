import { notFound } from 'next/navigation'
import { loadFrontpage } from '@/sanity/queries'
import { getMetaObject } from '@/sanity/queries/getMetaObject'
import { draftMode } from 'next/headers'
import dynamic from 'next/dynamic'
import Frontpage from '@/components/views/frontpage/Frontpage'

const FrontpagePreview = dynamic(() => import('@/components/views/frontpage/FrontpagePreview'))

export async function generateMetadata() {
  const {data} = await loadFrontpage()
  return getMetaObject(data)
}

export default async function Home() {
  const initial = await loadFrontpage()
  if (draftMode().isEnabled) {
    return <FrontpagePreview initial={initial} />
  }

  if (!initial || initial?.data === null) {
    return notFound()
  }

  return <Frontpage data={initial?.data} />
}
