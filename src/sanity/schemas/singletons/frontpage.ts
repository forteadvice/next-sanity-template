import { defineField, defineType } from 'sanity'
import { frontPageSections } from '../sections'

export default defineType({
  name: 'frontpage',
  type: 'document',
  title: 'Frontpage',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Frontpage',
      readOnly: () => true,
      hidden: () => true,
    }),

    defineField({
      name: 'hero',
      type: 'hero',
    }),

    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: frontPageSections,
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    }),
  ],
})
