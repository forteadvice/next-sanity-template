import { cachedClient } from '@/lib/client'
import { frontPageQuery } from '@/lib/queries'

export default async function Home() {
  const data = await cachedClient(frontPageQuery)
  console.log(data)
  return (
    <>
      <main className='flex items-center justify-center min-h-screen'>
        {/* Populate me with Sanity Content */}
        {data.title}
      </main>
    </>
  )
}
