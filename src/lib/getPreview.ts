import { draftMode } from 'next/headers'

export default function getPreview(): { token: string } | undefined {
  return undefined
  return draftMode().isEnabled ? { token: process.env.SANITY_API_READ_TOKEN as string } : undefined
}
