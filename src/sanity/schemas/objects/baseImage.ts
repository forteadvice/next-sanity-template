import type { ImageAsset, Image } from 'sanity'
import { ImageIcon } from '@sanity/icons'

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'baseImage',
  title: 'Image',
  type: 'image',
  icon: ImageIcon,
  options: { hotspot: true },
  validation: (Rule) =>
    Rule.custom((self) => {
      if (!self?.asset) return 'Please insert an image'
      return true
    }),

  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      description: 'Important for SEO and accessiblity',
      title: 'Alternative text',

      validation: (Rule) =>
        Rule.custom((self) => {
          if (!self) return 'Please enter Alternative text'
          return true
        }).warning(),

      hidden: ({ parent }) => {
        if (!parent?.asset) return true
        return false
      },
    }),
  ],
})

export type TBaseImage = {
  alt?: string
  asset: ImageAsset
} & Image
