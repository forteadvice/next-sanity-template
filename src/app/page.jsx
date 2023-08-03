import getPreview from '@/lib/getPreview'
import { getClient } from '@/lib/getClient'
import { frontPageQuery } from '@/lib/queries'
import PreviewWrapper from '@/components/preview/PreviewWrapper'
import FrontPageView from '@/components/views/FrontPageView'

export default async function Home() {
  const preview = getPreview()
  const data = await getClient(preview).fetch(frontPageQuery)

  return (
    <PreviewWrapper preview={preview} initialData={data} query={frontPageQuery}>
      <FrontPageView />
    </PreviewWrapper>
  )
}
