import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footer',
  type: 'object',
  fields: [
    defineField({ name: 'address', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'phone', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'email', type: 'string', validation: (Rule) => Rule.required() }),
  ],
})

export type TFooter = {
  address?: string
  phone?: string
  email?: string
}
