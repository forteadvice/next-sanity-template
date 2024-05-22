import Hero from '@/components/sections/Hero/Hero'
import ContentBlocksResolver from '@/components/utilities/ContentBlocks.tsx/ContentBlocksResolver'
import type { TFrontPage } from '@/sanity/schemas/documents/frontpage/frontpage.props'

export default function FrontpageView({ hero, contentBlocks }: TFrontPage) {
  return (
    <main>
      {hero && <Hero {...hero} />}
      {contentBlocks && <ContentBlocksResolver contentBlocks={contentBlocks} />}
    </main>
  )
}
