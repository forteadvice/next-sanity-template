import Link from 'next/link'
import { PortableText } from '@portabletext/react'

export default function TextBlock({ data }) {
  return (
    <div className='text-block'>
      <PortableText value={data.text} components={components} />
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
    <Link href={`/${props?.value?.slug}`} prefetch={false}>
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
