import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
const token = process.env.NEXT_PUBLIC_PREVIEW_TOKEN

export async function GET(request) {
  // const { searchParams } = new URL(request.url)

  // if (searchParams.get('token') != token) {
  //   return redirect('/api/exit-preview')
  // }

  // const redirPath = searchParams.get('redirect') ?? '/'

  // draftMode().enable()
  // return redirect(redirPath)
}
