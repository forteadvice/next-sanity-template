import { groq } from 'next-sanity'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { seoQuery, type TSeo } from '../objects/seo'
import { linkInternalQuery, type TLinkInternal } from '../objects/linkInternal'

export default defineType({
  name: 'settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Settings',
      readOnly: true,
      hidden: true,
    }),

    // MENU
    defineField({
      name: 'menu',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'links',
          type: 'array',
          of: [defineArrayMember({ type: 'linkInternal' })],
        }),
      ],
    }),

    // FOOTER
    defineField({
      name: 'footer',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({ name: 'address', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'phone', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'email', type: 'string', validation: (Rule) => Rule.required() }),
      ],
    }),

    // DEFAULT SEO
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),

    // 404 PAGE
    defineField({
      name: 'pageNotFound',
      title: '404 page',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'body', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
      ],
    }),
  ],
})

export const settingsQuery = groq`
  *[_type == 'settings'][0] {

    menu {
      links[] {
        _key,
        ${linkInternalQuery},
      }
    },

    footer {
      address,
      phone,
      email,
    },

    defaultSeo { ${seoQuery} },

    pageNotFound {
      title,
      body,
    },
  }
`

type TMenuItem = {
  _key?: string
} & TLinkInternal

export type TMenu = {
  links: TMenuItem[]
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
