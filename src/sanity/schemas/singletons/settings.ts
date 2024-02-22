import { MenuIcon, SearchIcon, InsertBelowIcon, UnknownIcon } from '@sanity/icons'

import { defineType, defineField, defineArrayMember } from 'sanity'
import { type TSeo } from '../objects/seo'
import type { TFlexibleLink } from '../objects/flexibleLink'

export default defineType({
  name: 'settings',
  type: 'document',
  groups: [
    { name: 'menu', icon: MenuIcon },
    { name: 'footer', icon: InsertBelowIcon },
    { name: 'seo', title: 'Default SEO', icon: SearchIcon },
    { name: 'pageNotFound', title: '404 page', icon: UnknownIcon },
  ],

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Settings',
      readOnly: true,
      hidden: true,
    }),

    // Menu
    defineField({
      name: 'menu',
      type: 'object',
      group: 'menu',
      fields: [
        defineField({
          name: 'menuItems',
          type: 'array',
          of: [defineArrayMember({ title: 'Item', type: 'flexibleLink' })],
        }),
      ],
    }),

    // Footer
    defineField({
      name: 'footer',
      type: 'object',
      group: 'footer',
      fields: [
        defineField({ name: 'address', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'phone', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'email', type: 'string', validation: (Rule) => Rule.required() }),
      ],
    }),

    // Default SEO
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo',
      group: 'seo',
    }),

    // 404 Page
    defineField({
      name: 'pageNotFound',
      title: '404 page',
      type: 'object',
      group: 'pageNotFound',
      fields: [
        defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'body', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
      ],
    }),
  ],
})

export type TMenuItem = {
  _key?: string
} & TFlexibleLink

export type TMenu = {
  menuItems: TMenuItem[]
}

export type TFooter = {
  address?: string
  phone?: string
  email?: string
}

export type TPageNotFound = {
  title?: string
  body?: string
}

export type TSettings = {
  menu?: TMenu
  footer?: TFooter
  defaultSeo?: TSeo
  pageNotFound?: TPageNotFound
}
