import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

const secret = process.env.REVALIDATION_TOKEN

export async function POST(req) {
  const signature = req.headers.get(SIGNATURE_HEADER_NAME)
  const body = await req.json()

  if (!isValidSignature(JSON.stringify(body), signature, secret)) {
    const message = 'Invalid signature'
    console.log(message)
    return NextResponse.json({ success: false, message }, { status: 401 })
  }

  const path = resolvePath(body)

  if (!path) {
    const message = 'Could not resolve path'
    console.log(message)
    return NextResponse.json({ success: false, message }, { status: 400 })
  }

  await sleep(1000) // Pause script for sanity to update DB

  try {
    revalidatePath(path)
    const message = `Revalidated: '${path}'`
    console.log(message)
    return NextResponse.json({ success: true, message }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, message: 'Revalidation failed' }, { status: 500 })
  }
}

function resolvePath(body) {
  if (!body?._type == 'frontpage') return '/' // Frontpage
  else if (body?.slug?.current) return `/${body.slug.current}` // Pages
  return undefined
}

// Sleep API - May be needed to make sure DB is updated before revalidating
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
