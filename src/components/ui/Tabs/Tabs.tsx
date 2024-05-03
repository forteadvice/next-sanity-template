'use client'
import { useId, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

type Tab = {
  label?: string
  headline?: string
  text?: string
  key?: string
}

type Props = {
  /** Array of tabs */
  tabs?: Tab[]
  /** Sets the tag used for each tabpanel headline */
  headlineTag?: 'h2' | 'h3'
  /** Provides a label that describes the purpose of the set of tabs. */
  ariaLabel: string
}

/**
 * Accessible tabs with (almost) no styling
 */
export default function Tabs({ tabs, headlineTag: HeadlineTag = 'h3', ariaLabel }: Props) {
  // Set unique key on each tab
  tabs?.map((tab) => (tab.key = `tabs${useId()}`))

  const [currentKey, setCurrentKey] = useState(tabs ? tabs[0]?.key : undefined)
  const buttonsRef = useRef<HTMLButtonElement[]>([])

  // Logic for arrow left & right
  function handleBtnKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (!buttonsRef.current) return
    const buttons = buttonsRef.current
    const target = event.target as HTMLButtonElement
    const index = buttons.findIndex((button) => button === target)

    if (event.key === 'ArrowLeft') {
      buttons[index === 0 ? buttons.length - 1 : index - 1].focus()
    }

    if (event.key === 'ArrowRight') {
      buttons[index === buttons.length - 1 ? 0 : index + 1].focus()
    }
  }

  return (
    <div>
      <ol role='tablist' aria-label={ariaLabel} className='flex gap-3'>
        {tabs?.map((tab, index) => {
          const { label, key } = tab
          return (
            <li key={`tab-${key}`}>
              <button
                ref={(button) => {
                  if (button) buttonsRef.current[index] = button
                }}
                role='tab'
                id={`tab-${key}`}
                aria-controls={`tabpanel-${key}`}
                aria-selected={key === currentKey}
                onClick={() => setCurrentKey(key)}
                onKeyDown={handleBtnKeyDown}
                className={cn({
                  underline: key === currentKey,
                })}
              >
                {label}
              </button>
            </li>
          )
        })}
      </ol>

      {tabs?.map((tab) => {
        const { headline, text, key } = tab
        return (
          <div
            role='tabpanel'
            key={`tabpanel-${key}`}
            id={`tabpanel-${key}`}
            aria-labelledby={`tab-${key}`}
            aria-hidden={currentKey !== key}
            className={cn('transition-opacity duration-500', {
              'opacity-0 h-0 overflow-hidden': currentKey !== key,
            })}
          >
            <HeadlineTag>{headline}</HeadlineTag>
            <p>{text}</p>
          </div>
        )
      })}
    </div>
  )
}
