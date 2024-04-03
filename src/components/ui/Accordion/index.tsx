import { cn } from '@/lib/utils'

type Props = {
  summary: string
  children: React.ReactNode
}

export default function Accordion({ summary, children }: Props) {
  return (
    <details className='group'>
      <summary>{summary}</summary>
      <div>{children}</div>
    </details>
  )
}
