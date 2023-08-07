import { getCachedClient } from '@/lib/getClient'
import { settingsQuery } from '@/lib/queries'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

export default async function NotFound() {
  const settings = await getCachedClient()(settingsQuery)

  return (
    <div className='h-screen flex flex-col'>
      <Menu data={settings?.menu} />
      <main className='flex-1 flex justify-center items-center'>
        <h1 className='text-2xl mb-2'>404 | Page not found</h1>
      </main>
      <Footer data={settings?.footer} />
    </div>
  )
}
