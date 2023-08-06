import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

const secret = process.env.REVALIDATION_TOKEN

export async function POST(req) {
  const signature = req.headers.get(SIGNATURE_HEADER_NAME)
  const body = await req.json()

  // Validate Secret
  if (!isValidSignature(JSON.stringify(body), signature, secret)) {
    const message = 'Invalid signature'
    console.log(message)
    return NextResponse.json({ success: false, message }, { status: 401 })
  }

  // Resolve path
  const path = resolvePath(body)

  // Validate resolved path
  if (!path) {
    const message = 'Could not resolve path'
    console.log(message)
    return NextResponse.json({ success: false, message }, { status: 400 })
  }

  // Pause script for sanity to update DB - might be needed
  // await sleep(1000)

  // Try revalidate
  try {
    revalidatePath(path)
    const message = `Revalidated: '${path}'}`
    console.log(message)
    return NextResponse.json({ success: true, message }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, message: 'Revalidation failed' }, { status: 500 })
  }
}
ª
// Function resolving path from body
// Body-GROQ is set in the webhook pane at sanity.io
function resolvePath(body) {
  switch (body?._type) {
    case 'frontpage':
      return '/(site)/(frontpage)'

    case 'page':
      return '/(site)/(page)/[slug]'

    case 'settings':
      return '/(site)'

    default:
      return undefined
  }
}

// Sleep API - May be needed to make sure DB is updated before revalidating
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
