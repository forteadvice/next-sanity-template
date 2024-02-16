import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ctaLink',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      initialValue: 'internal',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'linkInternal',
      title: 'Internal Link',
      type: 'linkInternal',
      hidden: ({ parent }) => parent?.type !== 'internal',
      validation: (Rule) =>
        Rule.custom((self, context) => {
          const { parent }: any = context
          if (parent?.type == 'internal' && !self) return 'Internal link is required'
          return true
        }),
    }),

    defineField({
      name: 'linkExternal',
      title: 'External Link',
      type: 'linkExternal',
      hidden: ({ parent }) => parent?.type !== 'external',
      validation: (Rule) =>
        Rule.custom((self, context) => {
          const { parent }: any = context
          if (parent?.type == 'external' && !self) return 'External link is required'
          return true
        }),
    }),
  ],
})

// TODO: make query and type :)
