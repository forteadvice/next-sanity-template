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
  const { path, changedPath } = resolvePaths(body)

  // Validate resolved path
  if (!path) {
    const message = 'Could not resolve path'
    console.log(message)
    return NextResponse.json({ success: false, message }, { status: 400 })
  }

  // Pause script for sanity to update DB
  await sleep(5000)

  // Try revalidate
  try {
    if (changedPath) revalidatePath(changedPath)
    revalidatePath(path)
    const message = `Revalidated: '${path}' ${changedPath ? `& '${changedPath}'` : ''}`
    console.log(message)
    return NextResponse.json({ success: true, message }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, message: 'Revalidation failed' }, { status: 500 })
  }
}

// Function resolving path from body
// Body-GROQ is set in the webhook pane at sanity.io
function resolvePaths(body) {
  // Fontpage
  if (body?._type == 'frontpage') {
    return { path: '/', changedPath: false }
  }

  // Pages
  else if (body?.slug) {
    const changedPath = body.changedSlug ? `/${body.changedSlug}` : false
    return { path: `/${body.slug}`, changedPath }
  }

  // Unhandled
  return { path: undefined, changedPath: false }
}

// Sleep API - May be needed to make sure DB is updated before revalidating
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
