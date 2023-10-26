import { notFound } from 'next/navigation'
import { sanityFetch } from '@/lib/sanity.fetch'
import getMetaObject from '@/lib/getMetaObject'
import getPreview from '@/lib/getPreview'
import { pageQuery, pagesPathsQuery } from '@/lib/queries'
import { Hero } from '@/components/blocks'
import ContentBlocks from '@/components/ContentBlocks'

export async function generateStaticParams() {
  const pages = await sanityFetch({ query: pagesPathsQuery, tags: ['page', 'page-paths'] })
  return pages
}

export async function generateMetadata({ params }) {
  const slug = params.slugs[params.slugs.length - 1]
  const data = await sanityFetch({
    query: pageQuery,
    params: { slug },
    tags: ['page', `page-${params.slug}`],
  })
  return getMetaObject(data?.seo)
}

export default async function Page({ params }) {
  const preview = getPreview()
  const slug = params.slugs[params.slugs.length - 1]
  const data = await sanityFetch({
    preview,
    query: pageQuery,
    params: { slug },
    tags: ['page', `page-${slug}`],
  })

  if (!data) {
    return notFound()
  }

  return (
    <main>
      {data?.hero && <Hero data={data.hero} />}
      {data?.contentBlocks && <ContentBlocks blocks={data.contentBlocks} />}
    </main>
  )
}
