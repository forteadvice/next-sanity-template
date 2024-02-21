import { loadSettings } from '@/sanity/loader/loadQueries'

export default async function NotFound() {
  const { data: settings } = await loadSettings()

  return (
    <main className='flex-1 flex justify-center items-center'>
      <h1 className='text-2xl mb-2'>
        {settings?.pageNotFound?.title} | {settings?.pageNotFound?.body}
      </h1>
    </main>
  )
}
