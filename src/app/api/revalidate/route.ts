import { revalidateTag, revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

/*
 * TODO: This needs to be typed and tested - this is just an old sketch
 */

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

    if (body.changedSlug) {
      console.log('revalidate *')
      revalidatePath('/', 'layout')
    } else {
      const tag = resolveTags(body)
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
  if (body._type == 'page') return `page:${body.slug}`
  return body._type
}
