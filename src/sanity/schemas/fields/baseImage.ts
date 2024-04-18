import { ImageIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'
import { groq } from 'next-sanity'
import type { Image, ImageAsset } from 'sanity'

export const baseImageSchema = defineType({
  name: 'baseImage',
  title: 'Image',
  type: 'image',
  icon: ImageIcon,
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      description: 'Important for SEO and accessiblity',
      title: 'Alternative text',

      validation: (Rule) =>
        Rule.custom((self, context) => {
          const { parent }: any = context
          if (self && !parent.asset) return 'Please select an image or delete the alt-text'
          if (!self) return 'Please enter Alternative text'
          return true
        }),

      hidden: ({ parent }) => {
        if (parent?.alt || parent?.asset) return false
        return true
      },
    }),
  ],
})

/**
 * baseImageQuery
 * @description Basic sanity image with hotspot options, cropping and alt-text
 */
export const baseImageQuery = groq`{
  hotspot,
  crop,
  alt,
  asset->
}`

export type TBaseImage = {
  alt?: string
  asset?: ImageAsset
} & Image
