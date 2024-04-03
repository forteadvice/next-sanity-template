import { defineType, defineField } from 'sanity'
import { linkableDocumentTypes } from '../documents'

export default defineType({
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
