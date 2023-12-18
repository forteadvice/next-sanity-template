import { notFound } from 'next/navigation'
import getPagesParams from '@/lib/fetch/getPagesParams'
import getPageData from '@/lib/fetch/getPageData'
import getMetaObject from '@/lib/getMetaObject'
import { Hero } from '@/components/sections'
import ContentBlocks from '@/components/global/ContentBlocks'

export async function generateStaticParams() {
  const pages = await getPagesParams()
  return pages
}

export async function generateMetadata({ params }) {
  const data = await getPageData(params)
  return getMetaObject(data?.seo)
}

export default async function Page({ params }) {
  const data = await getPageData(params)
  if (!data) return notFound()

  return (
    <main>
      {data?.hero && <Hero data={data.hero} />}
      {data?.contentBlocks && <ContentBlocks blocks={data.contentBlocks} />}
    </main>
  )
}
