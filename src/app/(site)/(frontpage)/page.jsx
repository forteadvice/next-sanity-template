import getPreview from '@/lib/getPreview'
import { frontPageQuery } from '@/lib/queries'
import PreviewWrapper from '@/components/preview/PreviewWrapper'
import FrontPageView from '@/components/views/FrontPageView'
import getMetaObject from '@/lib/getMetaObject'
import { sanityFetch } from '@/lib/sanity.fetch'

export async function generateMetadata() {
  const data = await sanityFetch({ query: frontPageQuery, tags: ['frontpage'] })
  return getMetaObject(data?.seo)
}

export default async function Home() {
  const preview = getPreview()
  const data = await sanityFetch({ preview, query: frontPageQuery, tags: ['frontpage'] })

  return (
    <PreviewWrapper preview={preview} initialData={data} query={frontPageQuery}>
      <FrontPageView />
    </PreviewWrapper>
  )
}
