import { loadSettings } from '@/sanity/lib/loaders/load.settings'

export default async function NotFound() {
  const { pageNotFound } = await loadSettings()

  return (
    <main className='flex-1 flex justify-center items-center'>
      <h1 className='text-2xl mb-2'>
        {pageNotFound?.title} | {pageNotFound?.body}
      </h1>
    </main>
  )
}
