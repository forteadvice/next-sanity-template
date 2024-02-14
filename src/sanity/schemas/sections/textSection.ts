import { defineField, defineType } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'
import { groq } from 'next-sanity'
import { portableTextQuery, type TPortableText } from '../queryPartials'

export default defineType({
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'text', type: 'portableText', validation: (Rule) => Rule.required() }),
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

export const textSectionQuery = groq`
  _type,
  _key,
  title,
  text[] { ${portableTextQuery} },
`
export type TTextSection = {
  _type: string
  _key: string
  title?: string
  text?: TPortableText
}
