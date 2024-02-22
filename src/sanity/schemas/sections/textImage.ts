import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons'

import { type TTextSection } from './textSection'
import { type TBaseImage } from '../objects/baseImage'

export default defineType({
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

export type TTextImage = {
  _type: string
  _key: string
  textSection?: TTextSection
  image?: TBaseImage
  layout?: 'textImage' | 'imageText'
}
