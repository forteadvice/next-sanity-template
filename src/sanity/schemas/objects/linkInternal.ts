import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

import { linkableDocTypes } from '@/lib/helpers'
import { docReferencePathQuery, type TDocReferencePath } from '../queryPartials'
import { groq } from 'next-sanity'

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
    }),

    defineField({
      name: 'reference',
      type: 'reference',
      to: linkableDocTypes,
    }),
  ],
})

export const linkInternalQuery = groq`
  title,
  ...reference->{
    ${docReferencePathQuery}
  }
`
export type TLinkInternal = {
  title?: string
} & TDocReferencePath
