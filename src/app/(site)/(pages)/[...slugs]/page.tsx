import { notFound } from 'next/navigation'
import {type PageParams, loadPageParams} from '@/sanity/queries/getPagesParams'
import { loadPage } from '@/sanity/queries/pageQuery'
import { getMetaObject } from '@/sanity/queries/getMetaObject'
import { Hero } from '@/components/sections'
import SectionsResolver from '@/components/global/SectionsResolver'

export async function generateStaticParams() {
  const pages = await loadPageParams()
  return pages
}

export async function generateMetadata({ params }: {params: PageParams}) {
  const {data} = await loadPage(params)
  return getMetaObject(data)
}

export default async function Page({ params }: {params: PageParams}) {
  const {data} = await loadPage(params)
  if (!data) return notFound()

  return (
    <main id="main">
      {data?.hero && <Hero data={data.hero} />}
      {data?.sections && <SectionsResolver sections={data.sections} />}
    </main>
  )
}
