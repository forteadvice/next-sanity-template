import { defineField, defineType } from 'sanity'

export const heroSchema = defineType({
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
