import { type TFlexibleLink } from '../../fields/flexibleLink/flexibleLink.props'
import { type TSeo } from '../../objects/seo/seo.props'

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
