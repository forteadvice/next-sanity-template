import Menu from '@/components/global/Menu'
import Footer from '@/components/global/Footer'
import { loadSettings } from '@/sanity/loader/loadFunctions'

export default async function NotFound() {
  const { data: settings } = await loadSettings()

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
