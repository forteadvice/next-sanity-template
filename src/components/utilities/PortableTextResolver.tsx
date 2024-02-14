import Link from 'next/link'
import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import type { PortableTextMarkDefinition } from '@portabletext/types'

export default function PortableTextResolver({ text }: { text: PortableTextMarkDefinition }) {
  return <PortableText value={text} components={components} />
}

// Custom components config
const baseStyle = 'mb-2 last:mb-0'
const components: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => <h2 className={`${baseStyle} text-4xl font-bold`}>{children}</h2>,
    h3: ({ children }) => <h3 className={`${baseStyle} text-3xl font-semibold`}>{children}</h3>,
    h4: ({ children }) => <h4 className={`${baseStyle} text-2xl font-semibold`}>{children}</h4>,
    normal: ({ children }) => <p className={`${baseStyle}`}>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className={`${baseStyle} italic before:content-['“'] after:content-['”']`}>
        {children}
      </blockquote>
    ),
  },
  marks: {
    linkInternal: LinkInternal,
    linkExternal: LinkExternal,
  },
  list: {
    bullet: ({ children }) => <ul className={`${baseStyle} list-disc list-inside`}>{children}</ul>,
    number: ({ children }) => (
      <ol className={`${baseStyle} list-decimal list-inside`}>{children}</ol>
    ),
  },
}

function LinkInternal(props: any) {
  return (
    <Link className='underline' href={`${props?.value?.path}`} prefetch={false}>
      {props?.text}
    </Link>
  )
}

function LinkExternal(props: any) {
  return (
    <a className='underline' target={'_blank'} href={resolveUrl(props?.value?.href)}>
      {props?.children}
    </a>
  )
}

// Portable text helpers
function resolveUrl(url: string) {
  if (!url?.startsWith('http') && !url?.startsWith('tel') && !url?.startsWith('mailto')) {
    return `https://${url}`
  }
  return url
}
