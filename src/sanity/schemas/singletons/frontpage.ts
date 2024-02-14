import { groq } from 'next-sanity'
import { defineField, defineType } from 'sanity'
import { frontPageSections, sectionsQuery, type TSection } from '../sections'

import { seoQuery, type TSeo } from '../objects/seo'
import { heroQuery, type THero } from '../objects/hero'

export default defineType({
  name: 'frontpage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Frontpage',
      readOnly: true,
      hidden: true,
    }),

    defineField({
      name: 'linkInternal',
      type: 'linkInternal',
    }),

    defineField({
      name: 'hero',
      type: 'hero',
    }),

    defineField({
      name: 'sections',
      type: 'array',
      of: frontPageSections,
    }),

    defineField({
      name: 'seo',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    }),
  ],
})

export const frontpageQuery = groq`
*[_type == 'frontpage'][0] {
  title,
  hero { ${heroQuery} },
  sections[] { ${sectionsQuery} },
  seo { ${seoQuery} },
}
`

export type TFrontPage = {
  title?: string
  hero?: THero
  sections?: TSection[]
  seo?: TSeo
}
