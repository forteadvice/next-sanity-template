import { MenuIcon, SearchIcon, InsertBelowIcon, UnknownIcon } from '@sanity/icons'
import { defineType, defineField, defineArrayMember } from 'sanity'
import { groq } from 'next-sanity'
import { flexibleLinkQuery, type TFlexibleLink } from '../fields/flexibleLink'
import { seoQuery, type TSeo } from '../objects/seo'

export const settingsSchema = defineType({
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

/**
 * Settings Query
 * @description Queries settings data - no params needed
 */
export const settingsQuery = groq`
*[_type == "settings"][0] {
  menu {
    menuItems[] ${flexibleLinkQuery}
  },
  footer {
    address,
    phone,
    email,
  },
  pageNotFound {
    title,
    body,
  },
  defaultSeo ${seoQuery}
}`

export type TMenuItem = TFlexibleLink

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
