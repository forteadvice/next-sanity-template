import Button from '@/components/ui/Button/Button'
import PortableTextResolver from '@/components/utilities/PortableTextResolver'
import type { TTextSection } from '@/sanity/schemas/objects/textSection/textSection.props'
import Heading from '@/components/ui/Heading/Heading'

export default function TextSection(props: TTextSection) {
  const { text, ctaLink, title } = props

  if (!text) return
  return (
    <article className='text-section my-4'>
      <Heading tag='h2' variant='large'>
        {title}
      </Heading>
      <PortableTextResolver value={text} />
      {ctaLink?.href && (
        <Button className='mt-2 inline-block' href={ctaLink?.href}>
          {ctaLink?.title}
        </Button>
      )}
    </article>
  )
}
