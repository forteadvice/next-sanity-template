import { defineType } from 'sanity'

export default defineType({
  name: 'manchet',
  type: 'text',
  rows: 5,
  description: 'Preferably below 250 characters',
  validation: (Rule) => [Rule.max(250).warning('Preferably below 250 characters')],
})
