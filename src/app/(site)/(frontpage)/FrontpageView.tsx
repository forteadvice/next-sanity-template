import Hero from '@/components/sections/Hero'
import SectionsResolver from '@/components/global/SectionsResolver'
import type { TFrontPage } from '@/sanity/schemas/documents/frontpage/frontpage.props'

export default function FrontpageView({ data }: { data: TFrontPage }) {
  return (
    <main>
      {data?.hero && <Hero data={data.hero} />}
      {data?.sections && <SectionsResolver sections={data.sections} />}
    </main>
  )
}
