import { defineField } from 'sanity'

export default defineField({
  name: 'flexibleUrl',
  title: 'URL',
  type: 'url',
  description: 'Accepts http, https, mailto: & tel:',
  validation: (Rule) =>
    Rule.uri({
      scheme: ['http', 'https', 'mailto', 'tel'],
    }),
})
