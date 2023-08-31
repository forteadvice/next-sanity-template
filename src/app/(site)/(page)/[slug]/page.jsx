import { notFound } from 'next/navigation'
import PreviewWrapper from '@/components/preview/PreviewWrapper'
import PageView from '@/components/views/PageView'
import { sanityFetch } from '@/lib/sanity.fetch'
import getMetaObject from '@/lib/getMetaObject'
import getPreview from '@/lib/getPreview'
import { pageQuery, pagesPathsQuery } from '@/lib/queries'

export async function generateStaticParams() {
  const pages = await sanityFetch({ query: pagesPathsQuery, tags: ['page', 'page-paths'] })
  return pages
}

export async function generateMetadata({ params }) {
  const data = await sanityFetch({
    query: pageQuery,
    params,
    tags: ['page', `page-${params.slug}`],
  })
  return getMetaObject(data?.seo)
}

export default async function Page({ params }) {
  const preview = getPreview()
  const data = await sanityFetch({
    preview,
    query: pageQuery,
    params,
    tags: ['page', `page-${params.slug}`],
  })

  if (!data) {
    return notFound()
  }

  return (
    <PreviewWrapper initialData={data} preview={preview} query={pageQuery} params={params}>
      <PageView />
    </PreviewWrapper>
  )
}
