import { Hero } from '@/components/sections'
import SectionsResolver from '@/components/global/SectionsResolver'
import { loadFrontpage } from '@/sanity/queries/frontPageQuery'
import { getMetaObject } from '@/sanity/queries/getMetaObject'

export async function generateMetadata() {
  const {data} = await loadFrontpage()
  return getMetaObject(data)
}

export default async function Home() {
  const {data} = await loadFrontpage()
  

  return (
    <main id="main">
      {data?.hero && <Hero data={data.hero} />}
      {data?.sections && <SectionsResolver sections={data.sections} />}
    </main>
  )
}
