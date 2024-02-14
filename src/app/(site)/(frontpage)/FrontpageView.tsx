import { Hero } from '@/components/sections'
import SectionsResolver from '@/components/global/SectionsResolver'
import type { TFrontPage } from '@/sanity/schemas/singletons/frontpage'

export default function FrontpageView({ data }: { data: TFrontPage }) {
  return (
    <main>
      {data?.hero && <Hero data={data.hero} />}
      {data?.sections && <SectionsResolver sections={data.sections} />}
    </main>
  )
}