import { defineField, defineType } from 'sanity'
import { baseImageQuery, type TBaseImage } from './baseImage'
import { groq } from 'next-sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'tagline', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'image', type: 'baseImage' }),
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

export const heroQuery = groq`
  title,
  tagline,
  image { ${baseImageQuery} }
`

export type THero = {
  title?: string
  tagline?: string
  image?: TBaseImage
}
