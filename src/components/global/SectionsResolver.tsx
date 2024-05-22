import * as Sections from '../sections'
import { upperFirst } from '@/lib/toUpperFirst'
import type { TSections, TSection } from '@/sanity/schemas/objects/sections/sections.props'

type Props = {
  sections: TSections
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
