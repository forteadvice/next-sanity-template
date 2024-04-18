import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      type: 'headline',
    }),

    defineField({
      name: 'manchet',
      type: 'manchet',
    }),

    defineField({
      name: 'image',
      type: 'baseImage',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
