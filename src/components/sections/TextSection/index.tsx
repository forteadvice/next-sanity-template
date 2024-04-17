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
    <div className='text-section'>
      <h2>
        <b>{title}</b>
      </h2>
      <PortableTextResolver text={text} />
      {ctaLink?.href && <Button href={ctaLink?.href}>{ctaLink?.title}</Button>}
    </div>
  )
}
