import { groq } from 'next-sanity'

import { flexibleLinkQuery, type TFlexibleLink } from '../fieldQueries/flexibleLink'
import { seoQuery, type TSeo } from '../objectQueries/seo'

/**
 * Settings Query
 * @description Queries settings data - no params needed
 */
export const settingsQuery = groq`
*[_type == "settings"][0] {
  menu {
    links[] ${flexibleLinkQuery}
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
