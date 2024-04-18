import Hero from '@/components/sections/Hero'
import SectionsResolver from '@/components/global/SectionsResolver'

import type { TPage } from '@/sanity/queries/documentQueries/page'

export default function PageView({ data }: { data: TPage }) {
  return (
    <main>
      {data?.hero && <Hero {...data?.hero} />}
      {data?.sections && <SectionsResolver sections={data?.sections} />}
    </main>
  )
}
