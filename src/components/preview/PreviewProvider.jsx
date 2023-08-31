'use client'

import dynamic from 'next/dynamic'
import { suspend } from 'suspend-react'

const LiveQueryProvider = dynamic(() => import('next-sanity/preview'))

const UniqueKey = Symbol('@/lib/sanity.client')

export default function PreviewProvider({ children, preview }) {
  const { client } = suspend(() => import('@/lib/sanity.client'), [UniqueKey])
  const token = preview?.token
  if (!token) throw new TypeError('Missing token')
  return (
    <LiveQueryProvider client={client} token={token}>
      {children}
    </LiveQueryProvider>
  )
}
