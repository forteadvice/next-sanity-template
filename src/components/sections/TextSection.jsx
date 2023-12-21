import PortableTextResolver from '@/components/utilities/PortableTextResolver'

export default function TextSection({ data, mt = true, mb = true }) {
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
