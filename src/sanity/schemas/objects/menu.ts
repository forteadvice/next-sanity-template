import { defineType, defineField, defineArrayMember } from 'sanity'
import { type TLinkInternal } from './linkInternal'

export default defineType({
  name: 'menu',
  type: 'object',
  fields: [
    defineField({
      name: 'links',
      type: 'array',
      of: [defineArrayMember({ type: 'linkInternal' })],
    }),
  ],
})

type TMenuItem = {
  _key?: string
} & TLinkInternal

export type TMenu = {
  links: TMenuItem[]
}
