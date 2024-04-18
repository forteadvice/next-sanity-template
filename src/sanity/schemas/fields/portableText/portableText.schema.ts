import { EarthGlobeIcon, LinkIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { linkableDocumentTypes } from '../../documents/_linkableDocumentTypes'

export const portableTextSchema = defineType({
  name: 'portableText',
  title: 'Portable Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
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
                validation: (Rule) => Rule.required(),
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
