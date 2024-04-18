import { defineField, defineType } from 'sanity'
import { groq } from 'next-sanity'
import type { Image, ImageAsset } from 'sanity'

export const seoSchema = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})

export const seoQuery = groq`{
  title,
  description,
  image {
    hotspot,
    crop,
    asset->,
  },
}`

export type TSeo = {
  title?: string
  description?: string
  image?: {
    asset: ImageAsset
  } & Image
}
