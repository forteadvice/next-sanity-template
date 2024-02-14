import Menu from '@/components/global/Menu'
import Footer from '@/components/global/Footer'
import { loadSettings } from '@/sanity/loader/loadFunctions'

export default async function NotFound() {
  const { data: settings } = await loadSettings()
  const { menu, footer } = settings

  return (
    <div className='h-screen flex flex-col'>
      {menu && <Menu data={menu} />}
      <main className='flex-1 flex justify-center items-center'>
        <h1 className='text-2xl mb-2'>
          {settings?.pageNotFound?.title} | {settings?.pageNotFound?.body}
        </h1>
      </main>
      {footer && <Footer data={footer} />}
    </div>
  )
}
