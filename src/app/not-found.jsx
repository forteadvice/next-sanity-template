import { getCachedClient } from '@/lib/getClient'
import { settingsQuery } from '@/lib/queries'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

export default async function NotFound() {
  const settings = await getCachedClient()(settingsQuery)
  const { menu, pageNotFound, footer } = settings

  return (
    <div className='h-screen flex flex-col'>
      <Menu data={menu} />
      <main className='flex-1 flex justify-center items-center'>
        <h1 className='text-2xl mb-2'>
          {pageNotFound?.title} | {pageNotFound?.body}
        </h1>
      </main>
      <Footer data={footer} />
    </div>
  )
}
