// Server component only

import { draftMode } from 'next/headers'

export default function getPreview() {
  return draftMode().isEnabled ? { token: process.env.SANITY_API_READ_TOKEN } : undefined
}
