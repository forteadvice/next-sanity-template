import { defineType, defineField } from 'sanity'
import { linkableDocumentTypes } from '../documents'

export default defineType({
  name: 'flexibleRefs',
  type: 'object',
  options: { collapsible: false },
  validation: (Rule) => Rule.required(),

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
})
