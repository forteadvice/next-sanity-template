import { draftMode } from 'next/headers'

export default function isDraftMode() {
  let isDraftMode = false
  try {
    isDraftMode = draftMode()?.isEnabled
  } catch {}
  return isDraftMode
}
