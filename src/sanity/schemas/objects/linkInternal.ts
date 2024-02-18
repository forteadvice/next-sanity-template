import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

import { linkableDocTypes } from '@/lib/helpers'
import type { TDocReferencePath } from '@/sanity/queries'

export default defineType({
  name: 'linkInternal',
  title: 'Link internal',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'reference',
      type: 'reference',
      to: linkableDocTypes,
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export type TLinkInternal = {
  title?: string
} & TDocReferencePath
