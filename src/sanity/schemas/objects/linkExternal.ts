import { groq } from 'next-sanity'

import { defineField, defineType } from 'sanity'
import { EarthGlobeIcon } from '@sanity/icons'

export default defineType({
  name: 'linkExternal',
  title: 'External link',
  type: 'object',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'href',
      title: 'URL',
      type: 'flexibleUrl',
    }),
  ],
})

export const linkExternalQuery = groq`
  title,
  url,
`

export type TLinkExternal = {
  title?: string
  href?: string
}
