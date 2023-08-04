import PreviewWrapper from '@/components/preview/PreviewWrapper'
import PageView from '@/components/views/PageView'
import { getCachedClient } from '@/lib/getClient'
import getMetaObject from '@/lib/getMetaObject'
import getPreview from '@/lib/getPreview'

import { pageQuery, pagesPathQuery } from '@/lib/queries'

export async function generateStaticParams() {
  const pages = await getCachedClient()(pagesPathQuery)
  return pages
}

export async function generateMetadata({ params }) {
  const data = await getCachedClient()(pageQuery, params)
  return getMetaObject(data?.seo)
}

export default async function Page({ params }) {
  const preview = getPreview()
  const data = await getCachedClient(preview)(pageQuery, params)
  return (
    <PreviewWrapper initialData={data} preview={preview} query={pageQuery} params={params}>
      <PageView />
    </PreviewWrapper>
  )
}
