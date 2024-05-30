import { PortableText, PortableTextReactComponents, PortableTextProps } from '@portabletext/react'
import InlineLink from '../ui/InlineLink/InlineLink'
import { cn } from '@/lib/cn'
import Heading from '../ui/Heading/Heading'

export default function PortableTextResolver({ value }: PortableTextProps) {
  return <PortableText value={value} components={components} />
}

// Custom components config
const baseBlockStyle = 'mt-10 first:mt-0'
const components: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => (
      <Heading variant='extra-large' tag='h2' className={cn(baseBlockStyle)}>
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading variant='large' tag='h3' className={cn(baseBlockStyle)}>
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading variant='medium' tag='h4' className={cn(baseBlockStyle)}>
        {children}
      </Heading>
    ),
    normal: ({ children }) => <p className={cn(baseBlockStyle, 'mt-5')}>{children}</p>,
  },

  marks: {
    link: (props) => {
      if (!props?.value?.href) return
      return <InlineLink href={`${props?.value?.href}`}>{props?.text}</InlineLink>
    },
  },

  list: {
    bullet: ({ children }) => <ul className={cn(baseBlockStyle, 'list-disc')}>{children}</ul>,
    number: ({ children }) => <ol className={cn(baseBlockStyle, 'list-decimal')}>{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => (
      <li className={cn(baseBlockStyle, 'mt-2.5 pl-0.5 ml-6')}>{children}</li>
    ),
    number: ({ children }) => (
      <li className={cn(baseBlockStyle, 'mt-2.5 pl-0.5 ml-6')}>{children}</li>
    ),
  },
}
