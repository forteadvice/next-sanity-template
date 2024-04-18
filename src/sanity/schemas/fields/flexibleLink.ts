import { defineType, defineField } from 'sanity'
import { linkableDocumentTypes } from '../documents/_linkableDocumentTypes'
import { groq } from 'next-sanity'
import { referencePathQuery, type TReferencePath } from '../../queries/helperQueries/referencePath'

export const flexibleLinkSchema = defineType({
  name: 'flexibleLink',
  type: 'object',
  options: { collapsible: false },
  fields: [
    defineField({
      name: 'title',
      description: 'asd',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'link',
      type: 'object',
      options: { collapsible: false },
      validation: (Rule) => Rule.required(),
      hidden: ({ parent }) => !parent?.title,

      fields: [
        defineField({
          name: 'internal',
          type: 'reference',
          to: linkableDocumentTypes,
          options: { disableNew: true },
          hidden: ({ parent }) => {
            return parent?.external ? true : false
          },
        }),

        defineField({
          name: 'external',
          type: 'flexibleUrl',
          hidden: ({ parent }) => {
            return parent?.internal ? true : false
          },
        }),
      ],
    }),
  ],
})

export const flexibleLinkQuery = groq`{
  title,
  link {
    internal { 'path': ${referencePathQuery} },
    external,
  } 
}`

export type TFlexibleLink = {
  title?: string
  link?: {
    internal?: { path?: TReferencePath }
    external?: string
  }
}
