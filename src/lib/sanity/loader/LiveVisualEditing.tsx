'use client'

import { useLiveMode } from '@sanity/react-loader'
import { VisualEditing } from 'next-sanity'
import { useEffect, useState } from 'react'

import { client } from '@/lib/sanity/client'

export default function LiveVisualEditing() {
  const [exitBtn, setExitBtn] = useState(false)
  const stegaClient = client.withConfig({
    stega: false, // TODO: Set true when ready
  })

  useLiveMode({ client: stegaClient })

  useEffect(() => {
    // If not an iframe or a Vercel Preview deployment, show exit preview
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'preview' && window === parent) {
      setExitBtn(true)
    }
    // Check if iframe parent has perspective published
    // const parentUrlParams = new URLSearchParams(parent?.location?.search)
  }, [])

  return (
    <>
      {exitBtn && (
        <a
          href='/api/draft/disable'
          className='bg-[#2c65c1] text-white rounded px-4 py-2 text-sm fixed bottom-2 right-2 opacity-90 hover:opacity-100 transition-opacity'
        >
          Exit preview
        </a>
      )}

      <VisualEditing zIndex={9999} />
    </>
  )
}
