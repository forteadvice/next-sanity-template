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

export type TLinkExternal = {
  title?: string
  href?: string
}
