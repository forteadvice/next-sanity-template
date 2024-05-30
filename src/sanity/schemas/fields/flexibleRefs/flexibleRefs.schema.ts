import { defineType, defineField } from 'sanity'
import { linkableDocumentTypes } from '../../documents/_linkableDocumentTypes'

export const flexibleRefsSchema = defineType({
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
      type: 'string',
      description: 'Accepts www, http://, https://, mailto: & tel:',
      hidden: ({ parent }) => {
        return parent?.internal ? true : false
      },
      validation: (Rule) => [
        Rule.custom((self) => {
          if (!self) return true
          if (
            self.startsWith('www') ||
            self.startsWith('http://') ||
            self.startsWith('https://') ||
            self.startsWith('mailto:') ||
            self.startsWith('tel:')
          )
            return true
          return 'Not a valid Url'
        }),
      ],
    }),
  ],
})
