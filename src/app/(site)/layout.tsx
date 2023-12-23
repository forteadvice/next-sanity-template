import '../../styles/globals.css'

import Menu from '@/components/global/Menu'
import Footer from '@/components/global/Footer'
// import getPreview from '@/lib/getPreview'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
// import ExitPreview from '@/components/global/preview/ExitPreview'
// import getSettingsData from '@/lib/fetch/getSettingsData'
import { loadSettings } from '@/sanity/queries/settingsQuery'
import { ReactNode, Suspense } from 'react'

const VisualEditing = dynamic(() => import('@/sanity/loader/VisualEditing'))
export default async function BaseLayout(props: { children?: ReactNode }) {
  const { children } = props
  // const preview = getPreview()
  console.log(draftMode())
  const {data: settings} = await loadSettings()

  return (
      <>
      <Suspense>
        <Menu data={settings?.menu} />
        </Suspense>
        <Suspense>
        {children}
        </Suspense>
        {/* {preview && <ExitPreview />} */}
        <Suspense>
        <Footer data={settings?.footer} />
        </Suspense>
        {draftMode().isEnabled && <VisualEditing />}
      </>
  )
}
