import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request) {
  const {searchParams} = new URL(request.url)
  draftMode().disable()
  return redirect(`${searchParams.get('path') || '/'}`)
}