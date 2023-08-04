'use client'

import { getClient } from '@/lib/getClient'
import { LiveQueryProvider } from 'next-sanity/preview'
import { useMemo } from 'react'

export default function PreviewProvider({ children, token }) {
  const client = useMemo(() => getClient(token), [token])
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}
