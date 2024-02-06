import getMetaObject from '@/lib/getMetaObject'
import getFrontpageData from '@/lib/fetch/getFrontpageData'
import { Hero } from '@/components/sections'
import SectionsResolver from '@/components/global/SectionsResolver'

export async function generateMetadata() {
  const data = await getFrontpageData()
  return getMetaObject(data?.seo)
}

export default async function Home() {
  const data = await getFrontpageData()

  return (
    <main id="main">
      {data?.hero && <Hero data={data.hero} />}
      {data?.sections && <SectionsResolver sections={data.sections} />}
    </main>
  )
}
