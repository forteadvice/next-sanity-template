// import { NextResponse } from 'next/server'
// import { revalidatePath } from 'next/cache'
// import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
// import { parseBody } from 'next-sanity/webhook'

// const secret = process.env.REVALIDATION_TOKEN

// export async function POST(request) {
//   const signature = request.headers[SIGNATURE_HEADER_NAME]
//   const body = await readBody(request)

//   if (!isValidSignature(body, signature, secret)) {
//     return NextResponse.json({ success: false, message: 'Invalid signature' }, { status: 401 })
//   }

//   const jsonBody = JSON.parse(body)
//   const path = jsonBody?.path
//   if (!path) {
//     console.log('No path provided')
//     return NextResponse.json({ success: false, message: 'No path provided' }, { status: 400 })
//   }

//   await sleep(1000) // Pause script for sanity to update DB

//   try {
//     const path = jsonBody.path
//     revalidatePath(path)
//     console.log(`Revalidated: '${path}'`)
//     return NextResponse.json({ success: true }, { status: 200 })
//   } catch (error) {
//     console.log(error)
//     return NextResponse.json({ success: false, message: 'Revalidation failed' }, { status: 500 })
//   }
// }

// // Customized body parser
// async function readBody(readable) {
//   const chunks = []
//   for await (const chunk of readable) {
//     chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
//   }
//   return Buffer.concat(chunks).toString('utf8')
// }

// // Sleep API - May be needed to make sure DB is updated before revalidating
// async function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }
