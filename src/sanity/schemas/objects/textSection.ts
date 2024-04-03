import { defineField, defineType } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'

export default defineType({
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'text', type: 'portableText', validation: (Rule) => Rule.required() }),
    defineField({ name: 'ctaLink', type: 'flexibleLink', title: 'CTA Link' }),
  ],

  preview: {
    select: {
      title: 'title',
    },

    prepare({ title }) {
      return {
        title,
        subtitle: 'Text Section',
      }
    },
  },
})
