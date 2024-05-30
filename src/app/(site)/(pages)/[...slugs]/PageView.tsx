import Hero from '@/components/sections/Hero/Hero'
import ContentBlocksResolver from '@/components/utilities/ContentBlocks.tsx/ContentBlocksResolver'

import type { TPage } from '@/sanity/schemas/documents/page/page.props'

export default function PageView({ hero, contentBlocks }: TPage) {
  return (
    <main>
      {hero && <Hero {...hero} />}
      {contentBlocks && <ContentBlocksResolver contentBlocks={contentBlocks} />}
    </main>
  )
}
