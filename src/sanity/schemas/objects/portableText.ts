import { defineArrayMember, defineField, defineType } from 'sanity'
import { EarthGlobeIcon, LinkIcon } from '@sanity/icons'

import { pageDocuments } from '../documents'
import { pageSingletons } from '../singletons'

const linkablePages = [...pageDocuments, ...pageSingletons].map((page) => ({ type: page.name }))

export default defineType({
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
            name: 'externalLink',
            type: 'object',
            title: 'External link',
            icon: EarthGlobeIcon,
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
            ],
          }),

          defineField({
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: LinkIcon,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: linkablePages,
              },
            ],
          }),
        ],
      },
    }),
  ],
})
