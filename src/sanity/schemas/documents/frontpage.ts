import { defineField, defineType, defineArrayMember } from 'sanity'
import { defaultSections } from '../objects'
import { SearchIcon, DashboardIcon } from '@sanity/icons'

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
      group: 'content',
      type: 'array',
      of: defaultSections,
    }),

    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
})
