import * as Sections from '../sections'
import { upperFirst } from '@/lib/helpers'

import type { TSection } from '@/sanity/schemas/sections'

type Props = {
  sections: TSection[]
}

export default function SectionsResolver({ sections }: Props) {
  return (
    <>
      {sections.map((section, idx) => {
        const Section = resolveSections(section)
        if (!Section) {
          return <div key={section._key}>Missing section: {upperFirst(section._type)}</div>
        }
        return <Section data={section} sectionIdx={idx} key={section._key} />
      })}
    </>
  )
}

type SectionsModule = typeof Sections &
  Record<string, React.ComponentType<{ data: TSection; sectionIdx: number }>>

function resolveSections(section: TSection) {
  const sectionName = upperFirst(section._type)
  const Section = (Sections as SectionsModule)[sectionName]
  if (Section) return Section
  console.error('Cant find section', upperFirst(section._type))
  return null
}
