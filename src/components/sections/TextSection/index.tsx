import Button from '@/components/ui/Button'
import PortableTextResolver from '@/components/utilities/PortableTextResolver'
import type { TTextSection } from '@/sanity/queries/objectQueries/textSection'

type Props = {
  data: TTextSection
}

export default function TextSection({ data }: Props) {
  const { text, ctaLink, title } = data

  if (!text) return
  return (
    <article className='text-section my-4'>
      <h2>
        <b>{title}</b>
      </h2>
      <PortableTextResolver text={text} />
      {ctaLink?.href && (
        <Button className='mt-2 inline-block' href={ctaLink?.href}>
          {ctaLink?.title}
        </Button>
      )}
    </article>
  )
}
