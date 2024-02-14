import PortableTextResolver from '@/components/utilities/PortableTextResolver'
import type { TTextSection } from '@/sanity/schemas/sections/textSection'

type Props = {
  data: TTextSection
  mt: boolean
  mb: boolean
}

export default function TextSection({ data, mt = true, mb = true }: Props) {
  return (
    <div
      className={`${mt ? (typeof mt === 'string' ? mt : 'mt-8') : ''} ${
        mb ? (typeof mb === 'string' ? mb : 'mb-8') : ''
      }`}
    >
      <PortableTextResolver text={data?.text} />
    </div>
  )
}
