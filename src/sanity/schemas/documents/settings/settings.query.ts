import { groq } from 'next-sanity'
import { flexibleLinkQuery } from '../../fields/flexibleLink/flexibleLink.query'
import { seoQuery } from '../../objects/seo/seo.query'

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
