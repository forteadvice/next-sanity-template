import { MenuIcon, SearchIcon, InsertBelowIcon, UnknownIcon } from '@sanity/icons'

import { defineType, defineField } from 'sanity'
import { type TSeo } from '../objects/seo'
import { type TMenu } from '../objects/menu'
import { type TFooter } from '../objects/footer'
import { type TPageNotFound } from '../objects/pageNotFound'

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

    defineField({
      name: 'menu',
      type: 'menu',
      group: 'menu',
    }),

    defineField({
      name: 'footer',
      type: 'footer',
      group: 'footer',
    }),

    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo',
      group: 'seo',
    }),

    defineField({
      name: 'pageNotFound',
      title: '404 page',
      type: 'pageNotFound',
      group: 'pageNotFound',
    }),
  ],
})

export type TSettings = {
  menu?: TMenu
  footer?: TFooter
  defaultSeo?: TSeo
  pageNotFound?: TPageNotFound
}
