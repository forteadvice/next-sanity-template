import PortableTextResolver from '@/components/utilities/PortableTextResolver'
import type { TTextSection } from '@/sanity/queries/objectQueries/textSection'

type Props = {
  data: TTextSection
}

export default function TextSection({ data }: Props) {
  const { text } = data
  if (!text) return
  return (
    <div>
      <PortableTextResolver text={text} />
    </div>
  )
}
