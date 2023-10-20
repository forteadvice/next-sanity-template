import getPreview from '@/lib/getPreview'
import { frontPageQuery } from '@/lib/queries'
import getMetaObject from '@/lib/getMetaObject'
import { sanityFetch } from '@/lib/sanity.fetch'
import { Hero } from '@/components/blocks'
import ContentBlocks from '@/components/ContentBlocks'

export async function generateMetadata() {
  const data = await sanityFetch({ query: frontPageQuery, tags: ['frontpage'] })
  return getMetaObject(data?.seo)
}

export default async function Home() {
  const preview = getPreview()
  const data = await sanityFetch({ preview, query: frontPageQuery, tags: ['frontpage'] })

  return (
    <main>
      {data?.hero && <Hero data={data.hero} />}
      {data?.contentBlocks && <ContentBlocks blocks={data.contentBlocks} />}
    </main>
  )
}
