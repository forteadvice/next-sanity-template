import { defineField } from 'sanity'

export default defineField({
  name: 'flexibleUrl',
  title: 'URL',
  type: 'string',
  description: 'Accepts www, http://, https://, mailto: & tel:',
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
})
