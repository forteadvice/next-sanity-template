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
    }),

    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],
})

export const linkExternalQuery = groq`
  title,
  url,
`

export type TLinkExternal = {
  title?: string
  url?: string
}
