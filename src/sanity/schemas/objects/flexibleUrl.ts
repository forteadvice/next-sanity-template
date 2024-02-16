import { defineField } from 'sanity'

export default defineField({
  name: 'flexibleUrl',
  title: 'URL',
  type: 'url',
  description: 'Accepts http, https, mailto: and tel:',
  validation: (Rule) =>
    Rule.uri({
      scheme: ['http', 'https', 'mailto', 'tel'],
    }).custom((self) => {
      if (!self) return 'Please set a value'
      if (self === 'mailto:') return 'Please type an email'
      if (self === 'tel:') return 'Please type phone number'
      return true
    }),
})
