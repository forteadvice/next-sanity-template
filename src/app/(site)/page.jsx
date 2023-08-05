import getPreview from '@/lib/getPreview'
import { getCachedClient, getClient } from '@/lib/getClient'
import { frontPageQuery } from '@/lib/queries'
import PreviewWrapper from '@/components/preview/PreviewWrapper'
import FrontPageView from '@/components/views/FrontPageView'
import getMetaObject from '@/lib/getMetaObject'

export const dynamic = 'force-static'

export async function generateMetadata() {
  // const data = await getCachedClient()(frontPageQuery)
  const data = await getClient().fetch(frontPageQuery)
  return getMetaObject(data?.seo)
}

export default async function Home() {
  const preview = getPreview()
  // const data = await getCachedClient(preview)(frontPageQuery)
  const data = await getClient(preview).fetch(frontPageQuery)

  return (
    <PreviewWrapper preview={preview} initialData={data} query={frontPageQuery}>
      <FrontPageView />
    </PreviewWrapper>
  )
}
