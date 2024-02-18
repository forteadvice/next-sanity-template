import { defineField, defineType } from 'sanity'
import { frontPageSections, type TSection } from '../sections'
import { SearchIcon, DashboardIcon } from '@sanity/icons'

import { type TSeo } from '../objects/seo'
import { type THero } from '../objects/hero'

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

export type TFrontPage = {
  title?: string
  hero?: THero
  sections?: TSection[]
  seo?: TSeo
}
