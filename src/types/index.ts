// import type { Image, ImageAsset } from 'sanity'
// import type { PortableTextMarkDefinition } from '@portabletext/types'

/*
 * Objects / partials
 */

// export type TBaseImage = {
//   alt?: string
//   asset: ImageAsset
// } & Image

// export type TDocReferencePath = {
//   path: string
// }

// export type TLinkInternal = {
//   title?: string
// } & TDocReferencePath

// export type TLinkExternal = {
//   title?: string
//   href?: string
// }

// export type TPortableText = PortableTextMarkDefinition

// export type THero = {
//   title?: string
//   tagline?: string
//   image?: TBaseImage
// }

// export type TFooter = {
//   address?: string
//   phone?: string
//   email?: string
// }

// export type TMenuItem = {
//   _key?: string
// } & TLinkInternal

// export type TMenu = {
//   links: TMenuItem[]
// }

// export type TPageNotFound = {
//   title?: string
//   body?: string
// }

// export type TSeo = {
//   title?: string
//   description?: string
//   image?: {
//     asset: ImageAsset
//   } & Image
// }

// /*
//  * Secitons
//  */

// export type TTextSection = {
//   _type: string
//   _key: string
//   title?: string
//   text?: TPortableText
// }

// export type TTextImage = {
//   _type: string
//   _key: string
//   textSection?: TTextSection
//   image?: TBaseImage
//   layout?: 'textImage' | 'imageText'
// }

// export type TSection = TTextSection | TTextImage

// /*
//  * Documents and singletons
//  */

// export type TPage = {
//   title?: string
//   slug?: string
//   hero?: THero
//   sections?: TSection[]
//   seo?: TSeo
// }

// export type TFrontPage = {
//   title?: string
//   hero?: THero
//   sections?: TSection[]
//   seo?: TSeo
// }

// export type TSettings = {
//   menu?: TMenu
//   footer?: TFooter
//   defaultSeo?: TSeo
//   pageNotFound?: TPageNotFound
// }
