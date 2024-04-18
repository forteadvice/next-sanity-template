import { defineArrayMember, defineField, defineType } from 'sanity'
import { EarthGlobeIcon, LinkIcon } from '@sanity/icons'
import { linkableDocumentTypes } from '../documents/_linkableDocumentTypes'
import { groq } from 'next-sanity'
import type { PortableTextMarkDefinition } from '@portabletext/types'
import { referencePathQuery } from '../../queries/helperQueries/referencePath'

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

/**
 * portableTextQuery
 * @description Resolves all types of portable texts. Use type TDocReferencePath
 */
export const portableTextQuery = groq`{
  ...,
  markDefs[] {
    ...,
    _type == 'linkInternal' => {
      ...,
      ...reference->{ "path": ${referencePathQuery} }
    },
  },
}`

export type TPortableText = PortableTextMarkDefinition
