import { defineArrayMember, defineField, defineType } from 'sanity'
import { EarthGlobeIcon, LinkIcon } from '@sanity/icons'

import { linkableDocumentTypes } from '../documents'

export default defineType({
  name: 'portableTextSimple',
  title: 'Simple Portable Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Quote', value: 'blockquote' },
      ],

      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Strike', value: 'strike-through' },
        ],

        annotations: [
          defineField({
            name: 'linkExternal',
            type: 'object',
            title: 'External link',
            icon: EarthGlobeIcon,
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'flexibleUrl',
              }),
            ],
          }),

          defineField({
            name: 'linkInternal',
            type: 'object',
            title: 'Internal link',
            icon: LinkIcon,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: linkableDocumentTypes,
                validation: (Rule) => Rule.required(),
              },
            ],
          }),
        ],
      },
    }),
  ],
})
