import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'tagline',
      type: 'string',
    }),

    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },

    prepare({ title, media }) {
      return {
        title: title || 'Hero',
        subtitle: 'Hero',
        media,
      }
    },
  },
})
