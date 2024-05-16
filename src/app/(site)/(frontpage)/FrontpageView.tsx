import Hero from '@/components/sections/Hero'
import SectionsResolver from '@/components/global/SectionsResolver'
import type { TFrontPage } from '@/sanity/schemas/documents/frontpage/frontpage.props'

export default function FrontpageView({ hero, sections }: TFrontPage) {
  return (
    <main>
      {hero && <Hero {...hero} />}
      {sections && <SectionsResolver sections={sections} />}
    </main>
  )
}
