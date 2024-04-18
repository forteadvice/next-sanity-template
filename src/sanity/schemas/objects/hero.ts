import { defineField, defineType } from 'sanity'
import { groq } from 'next-sanity'
import { baseImageQuery, type TBaseImage } from '../fields/baseImage'

export const heroSchema = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'tagline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'baseImage',
      validation: (Rule) => Rule.required(),
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

export const heroQuery = groq`{
  title,
  tagline,
  image ${baseImageQuery}
}`

export type THero = {
  title?: string
  tagline?: string
  image?: TBaseImage
}
