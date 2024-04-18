import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons'
import { groq } from 'next-sanity'
import { baseImageQuery, type TBaseImage } from '../fields/baseImage'
import { textSectionQuery, type TTextSection } from './textSection'

export const textImageSchema = defineType({
  name: 'textImage',
  title: 'Text Image',
  type: 'object',
  icon: ImageIcon,
  validation: (Rule) => Rule.required(),
  fields: [
    defineField({
      name: 'textSection',
      title: 'Text section',
      type: 'textSection',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'baseImage',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'layout',
      type: 'string',
      initialValue: 'textImage',
      options: {
        list: [
          { title: 'Text image', value: 'textImage' },
          { title: 'Image text', value: 'imageText' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      textSection: 'textSection',
      image: 'image',
    },

    prepare({ textSection, image }) {
      const title = textSection?.title
      return {
        title: title,
        subtitle: 'Text Image',
        media: image.asset,
      }
    },
  },
})

export const textImageQuery = groq`{
  textSection ${textSectionQuery},
  image ${baseImageQuery},
  layout,
}`

export type TTextImage = {
  textSection?: TTextSection
  image?: TBaseImage
  layout?: 'textImage' | 'imageText'
}
