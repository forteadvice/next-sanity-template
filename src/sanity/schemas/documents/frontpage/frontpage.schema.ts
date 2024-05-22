import { DashboardIcon, SearchIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { defaultBlocks } from '../../objects/contentBlocks/contentBlocks.schema'

export const frontpageSchema = defineType({
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
    }),

    defineField({
      name: 'hero',
      type: 'hero',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'contentBlocks',
      group: 'content',
      type: 'array',
      of: defaultBlocks,
    }),

    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
})
