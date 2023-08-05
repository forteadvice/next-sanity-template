import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

// import { parseBody } from 'next-sanity/webhook'
export { config } from 'next-sanity/webhook'

const secret = process.env.REVALIDATION_TOKEN

export async function POST(req) {
  const signature = req.headers.get(SIGNATURE_HEADER_NAME)
  const body = await req.json()
  // console.log(body)
  const bodyString = JSON.stringify(body)

  // const { isValidSignature, body } = await parseBody(req, secret)

  const message = signature
  console.log(message)
  return NextResponse.json({ success: false, message }, { status: 401 })

  console.log('######')
  console.log(body)
  console.log('######')

  if (!isValidSignature) {
    const message = 'Invalid signature'
    console.log(message)
    return NextResponse.json({ success: false, message }, { status: 401 })
  }

  const path = resolvePath(body)

  if (!path) {
    const message = 'No path provided'
    console.log(message)
    return NextResponse.json({ success: false, message }, { status: 400 })
  }

  await sleep(1000) // Pause script for sanity to update DB

  try {
    revalidatePath(path)
    console.log(`Revalidated: '${path}'`)
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, message: 'Revalidation failed' }, { status: 500 })
  }
}

function resolvePath(body) {
  if (!body?.slug?.current) return '/'
  return `/${body.slug.current}`
}

// Sleep API - May be needed to make sure DB is updated before revalidating
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
