'use client'

import { useLiveMode } from '@sanity/react-loader'
import { VisualEditing } from 'next-sanity'
import { useEffect, useState } from 'react'

import { client } from '@/sanity/lib/sanity.client'

export default function LiveVisualEditing() {
  const [exitBtn, setExitBtn] = useState(false)

  const stegaClient = client.withConfig({
    stega: {
      enabled: true,
    },
  })

  useLiveMode({ client: stegaClient })

  useEffect(() => {
    if (window === parent) {
      setExitBtn(true)
    }
  }, [])

  return (
    <>
      {exitBtn && (
        <a
          href='/api/draft/disable'
          className='bg-[#2c65c1] !text-white rounded px-4 py-2 text-sm fixed bottom-2 right-2 opacity-90 hover:opacity-100 transition-opacity block z-50'
        >
          Exit preview
        </a>
      )}

      <VisualEditing />
    </>
  )
}
