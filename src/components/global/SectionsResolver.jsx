import * as Sections from '../sections'
import { upperFirst } from '@/lib/helpers'

export default function SectionsResolver({ sections }) {
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

function resolveSections(section) {
  const Section = Sections[upperFirst(section._type)]
  if (Section) return Section
  console.error('Cant find section', upperFirst(section._type))
  return null
}
