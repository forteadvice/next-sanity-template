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
      titleObj: 'textSection',
      image: 'image',
    },

    prepare({ titleObj, image }) {
      const title = titleObj?.text[0]?.children[0]?.text || 'Text image'
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
