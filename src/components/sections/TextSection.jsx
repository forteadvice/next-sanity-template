import Link from 'next/link'
import { PortableText } from '@portabletext/react'

export default function TextSection({ data, mt = true, mb = true }) {
  return (
    <div className={`text-section ${mt ? typeof mt === 'string' ? mt : 'mt-8' : ''} ${mb ? typeof mb === 'string' ? mb : 'mt-8' : ''}`}>
      <PortableText value={data?.text} components={components} />
    </div>
  )
}

// Custom components config
const components = {
  marks: {
    internalLink: InternalLink,
    externalLink: ExternalLink,
  },
}

// Custom components design
function InternalLink(props) {
  return (
    <Link href={`/${props?.value?.path}`} prefetch={false}>
      {props.text}
    </Link>
  )
}

function ExternalLink(props) {
  return (
    <a target={'_blank'} href={resolveUrl(props?.value?.href)}>
      {props.children}
    </a>
  )
}

// Portable text helpers
function resolveUrl(url) {
  if (!url.startsWith('http') && !url.startsWith('tel') && !url.startsWith('mailto')) {
    return `https://${url}`
  }
  return url
}
