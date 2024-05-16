import { useId, useState } from 'react'

type Props = {
  summary: string
  children: React.ReactNode
  summaryTag: 'h2' | 'h3'
}

export default function Accordion({ summary, summaryTag: SummaryTag = 'h3', children }: Props) {
  const [expanded, setExpanded] = useState(false)

  // Genarate inuque identifiers
  const id = useId()
  const buttonId = `button${id}`
  const regionId = `region${id}`

  return (
    <div>
      <SummaryTag>
        <button
          id={buttonId}
          aria-expanded={expanded}
          aria-controls={regionId}
          onClick={() => setExpanded(!expanded)}
          className='block w-full text-left'
        >
          <span>{summary}</span>
        </button>
      </SummaryTag>

      <div id={regionId} role='region' aria-labelledby={buttonId} hidden={!expanded}>
        {children}
      </div>
    </div>
  )
}
