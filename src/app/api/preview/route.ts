import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'
import { previewToken } from '@/sanity/lib/sanity.env'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  if (searchParams.get('token') != previewToken) {
    return redirect('/api/exit-preview')
  }

  const redirPath = searchParams.get('redirect') ?? '/'

  draftMode().enable()
  return redirect(redirPath)
}
