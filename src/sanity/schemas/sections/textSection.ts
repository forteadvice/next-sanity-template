import { defineField, defineType } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'

export default defineType({
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'portableText',
    }),
  ],

  preview: {
    select: {
      title: 'text',
    },
    prepare({ title }) {
      return {
        title: title[0].children[0].text,
        subtitle: 'Text Section',
        media: BlockContentIcon,
      }
    },
  },
})
