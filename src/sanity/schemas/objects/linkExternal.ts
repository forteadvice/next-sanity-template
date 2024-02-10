import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'linkExternal',
  title: 'External link',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],
})
