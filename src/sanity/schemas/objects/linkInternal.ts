import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

import { linkableDocTypes } from '../linkableDocTypes'

export default defineType({
  name: 'linkInternal',
  title: 'Link internal',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'reference',
      type: 'reference',
      to: linkableDocTypes,
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },

    prepare({ title }) {
      return {
        title: `${title}`,
      }
    },
  },
})
