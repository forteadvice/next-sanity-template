import { revalidateTag, revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: any) {
  try {
    const { isValidSignature, body } = await parseBody(req, process.env.SANITY_REVALIDATE_SECRET)

    if (!isValidSignature) {
      const message = 'Invalid signature'
      console.log(message)
      return new NextResponse(JSON.stringify({ message, isValidSignature, body }), { status: 401 })
    }

    if (!body?._type) {
      const message = 'Bad Request'
      console.log(message)
      return new NextResponse(message, { status: 400 })
    }

    const tag = resolveTags(body)
    if (!tag) {
      console.log('revalidate *')
      revalidatePath('/', 'layout')
    } else {
      console.log(`revalidateTag: ${tag}`)
      revalidateTag(tag)
    }

    return NextResponse.json({ message: 'Reavalidated' }, { status: 200 })
  } catch (err: any) {
    console.error(err)
    return new NextResponse(err?.message ?? 'Unknown error', { status: 500 })
  }
}

function resolveTags(body: any) {
  const { changedSlug, _type, slug } = body

  // Return null to revalidate *
  // Slug changed revalidate * to prevent 404 links
  if (changedSlug) return null

  if (_type == 'page') return `page:${slug}`
  if (_type == 'frontpage') return 'frontpage'
  if (_type == 'settings') return 'settings'

  // Unhandled - revalidate *
  return null
}
