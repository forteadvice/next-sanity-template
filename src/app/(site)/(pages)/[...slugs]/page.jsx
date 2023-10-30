import { notFound } from 'next/navigation'
import { sanityFetch } from '@/lib/sanity.fetch'
import getMetaObject from '@/lib/getMetaObject'
import getPreview from '@/lib/getPreview'
import { pageQuery, pagesPathsQuery } from '@/lib/queries'
import { Hero } from '@/components/blocks'
import ContentBlocks from '@/components/ContentBlocks'

async function getPages(slugs, preview = false) {
  // Assemble params to get specific page
  const slug = slugs[slugs.length - 1]
  const parentSlug = slugs[slugs.length - 2] ?? null
  const grandParentSlug = slugs[slugs.length - 3] ?? null
  const data = await sanityFetch({
    preview,
    query: pageQuery,
    params: { slug, parentSlug, grandParentSlug },
    tags: ['page', `page-${slug}`],
  })
  return data
}

export async function generateStaticParams() {
  const pages = await sanityFetch({ query: pagesPathsQuery, tags: ['page', 'page-paths'] })
  return pages
}

export async function generateMetadata({ params }) {
  const { slugs } = params
  const data = await getPages(slugs, false)
  return getMetaObject(data?.seo)
}

export default async function Page({ params }) {
  const { slugs } = params
  const preview = getPreview()
  const data = await getPages(slugs, preview)

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
