import { draftMode } from 'next/headers'

export default function isDraftMode(): boolean {
  let isDraftMode = false
  try {
    isDraftMode = draftMode()?.isEnabled
  } catch {}
  return isDraftMode
}
