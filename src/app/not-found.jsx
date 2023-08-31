import { sanityFetch } from '@/lib/sanity.fetch'
import { settingsQuery } from '@/lib/queries'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

export default async function NotFound() {
  const settings = await sanityFetch({ query: settingsQuery, tags: ['settings'] })

  return (
    <div className='h-screen flex flex-col'>
      <Menu data={settings?.menu} />
      <main className='flex-1 flex justify-center items-center'>
        <h1 className='text-2xl mb-2'>
          {settings?.pageNotFound?.title} | {settings?.pageNotFound?.body}
        </h1>
      </main>
      <Footer data={settings?.footer} />
    </div>
  )
}
