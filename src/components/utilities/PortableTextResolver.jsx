import Link from 'next/link'
import { PortableText } from '@portabletext/react'

export default function PortableTextResolver({ text }) {
  return <PortableText value={text} components={components} />
}

// Custom components config
const defaultMargins = 'mb-2 last:mb-0'
const components = {
  block: {
    h2: (props) => <h2 className={`text-4xl font-bold ${defaultMargins}`}>{props?.children}</h2>,
    h3: (props) => (
      <h3 className={`text-3xl font-semibold ${defaultMargins}`}>{props?.children}</h3>
    ),
    h4: (props) => (
      <h4 className={`text-2xl font-semibold ${defaultMargins}`}>{props?.children}</h4>
    ),
    blockquote: (props) => (
      <blockquote className={`italic before:content-['“'] after:content-['”'] ${defaultMargins}`}>
        {props?.children}
      </blockquote>
    ),
    normal: (props) => {
      return <p className={`${defaultMargins}`}>{props?.children}</p>
    },
  },
  marks: {
    internalLink: InternalLink,
    externalLink: ExternalLink,
  },
  list: {
    bullet: unorderedList,
    number: orderedList,
  },
}

// Custom components config
function unorderedList({ children }) {
  return <ul className={`list-disc list-inside ${defaultMargins}`}>{children}</ul>
}

function orderedList({ children }) {
  return <ol className={`list-decimal list-inside ${defaultMargins}`}>{children}</ol>
}

function InternalLink(props) {
  return (
    <Link className='underline' href={`/${props?.value?.path}`} prefetch={false}>
      {props.text}
    </Link>
  )
}

function ExternalLink(props) {
  return (
    <a className='underline' target={'_blank'} href={resolveUrl(props?.value?.href)}>
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
