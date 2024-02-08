import { Hero } from '@/components/sections'
import SectionsResolver from '@/components/global/SectionsResolver'

export default function FrontpageView({ data }: any) {
  return (
    <main>
      {data?.hero && <Hero data={data.hero} />}
      {data?.sections && <SectionsResolver sections={data.sections} />}
    </main>
  )
}
