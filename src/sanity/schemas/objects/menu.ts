import { groq } from 'next-sanity'

import { defineType, defineField, defineArrayMember } from 'sanity'
import { linkInternalQuery, type TLinkInternal } from './linkInternal'

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

export const menuQuery = groq`
  links[] {
    _key,
    ${linkInternalQuery},
  }
`

type TMenuItem = {
  _key?: string
} & TLinkInternal

export type TMenu = {
  links: TMenuItem[]
}
