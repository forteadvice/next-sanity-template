import { groq } from 'next-sanity'
import { defineField, defineType } from 'sanity'
import { frontPageSections, sectionsQuery, type TSection } from '../sections'
import { SearchIcon, CogIcon, DashboardIcon } from '@sanity/icons'

import { seoQuery, type TSeo } from '../objects/seo'
import { heroQuery, type THero } from '../objects/hero'

export default defineType({
  name: 'frontpage',
  type: 'document',
  groups: [
    { name: 'content', icon: DashboardIcon },
    { name: 'seo', title: 'SEO', icon: SearchIcon },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Frontpage',
      readOnly: true,
      hidden: true,
    }),

    defineField({
      name: 'hero',
      type: 'hero',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sections',
      type: 'array',
      of: frontPageSections,
      group: 'content',
    }),

    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
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
