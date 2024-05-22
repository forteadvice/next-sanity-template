import { loadSettings } from '@/sanity/lib/loaders/load.settings'
import Heading from '@/components/ui/Heading/Heading'

export default async function NotFound() {
  const { pageNotFound } = await loadSettings()

  return (
    <main className='flex-1 flex justify-center items-center'>
      <Heading tag='h1' variant='title'>
        {pageNotFound?.title} | {pageNotFound?.body}
      </Heading>
    </main>
  )
}
