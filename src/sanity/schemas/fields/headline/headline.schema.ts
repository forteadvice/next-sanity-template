import { defineType } from 'sanity'

export const headlineSchema = defineType({
  name: 'headline',
  type: 'string',
  validation: (Rule) => [Rule.max(100).warning('Preferably below 100 characters'), Rule.required()],
})
