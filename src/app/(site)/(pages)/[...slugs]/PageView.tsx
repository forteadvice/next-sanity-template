import Hero from '@/components/sections/Hero/Hero'
import SectionsResolver from '@/components/global/SectionsResolver'

import type { TPage } from '@/sanity/schemas/documents/page/page.props'

export default function PageView({ hero, sections }: TPage) {
  return (
    <main>
      {hero && <Hero {...hero} />}
      {sections && <SectionsResolver sections={sections} />}
    </main>
  )
}
