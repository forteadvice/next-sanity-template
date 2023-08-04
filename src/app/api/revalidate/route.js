import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'

export { config } from 'next-sanity/webhook'

const secret = process.env.REVALIDATION_TOKEN

export async function POST(request) {
  const { isValidSignature, body } = await parseBody(request, secret)

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
  return `/${body?.current?.slug}` || '/'
}

// Customized body parser
// async function readBody(readable) {
//   const chunks = []
//   for await (const chunk of readable) {
//     chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
//   }
//   return Buffer.concat(chunks).toString('utf8')
// }

// Sleep API - May be needed to make sure DB is updated before revalidating
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
