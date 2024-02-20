import { groq } from 'next-sanity'
import type { PortableTextMarkDefinition } from '@portabletext/types'

/*
 ! Helper-queries should not be wrapped in a prenamed object
 *
 * PARTIALS
 * Groqs for minor reusable fields, such as resolving image-assets and page-paths on internal links
 */

/**
 * docReferencePathQuery
 * @description Resolves path for every possible doc-types
 */
export const docReferencePathQuery = groq`
  _type == "frontpage" => {
    'path': "/"
  },

  _type == "page" => {
    'path': "/" + slug.current,
    defined(parent->slug.current) => {
      'path': "/" + parent->slug.current + "/" + slug.current
    },
    defined(parent->parent->slug.current) => {
      'path': "/" + parent->parent->slug.current + "/" + parent->slug.current + "/" + slug.current
    }
  }
`
export type TDocReferencePath = {
  path: string
}

/**
 * portableTextQuery
 * @description Resolves all types of portable texts. Use type TDocReferencePath
 */
const portableTextQuery = groq`
  ...,
  markDefs[] {
    ...,
    _type == 'linkInternal' => {
      ...,
      ...reference->{
        ${docReferencePathQuery}
      }
    },
  },
`
export type TPortableText = PortableTextMarkDefinition

/**
 * linkInternalQuery
 * @description Resolves * internal links using the docReferencePath
 */
const linkInternalQuery = groq`
  title,
  ...reference->{
    ${docReferencePathQuery}
  }
`

/**
 * baseImageQuery
 * @description Basic sanity image with hotspot options, cropping and alt-text
 */
const baseImageQuery = groq`
  hotspot,
  crop,
  alt,
  asset->
`

/*
 * SECTIONS
 * Prepared groqs for reused components / sections
 */

const seoQuery = groq`
  title,
  description,
  image {
    hotspot,
    crop,
    asset->,
  }
`

const heroQuery = groq`
  title,
  tagline,
  image { ${baseImageQuery} }
`

const sectionsQuery = groq`
  ...,

  _type == "textSection" => {
    text[] { ${portableTextQuery} },
  },

  _type == "textImage" => {
    image { ${baseImageQuery} },
    textSection {
      text[] { ${portableTextQuery} }
    }
  },
`

/*
 * QUERIES
 * Finalized groqs to query data
 */

/**
 * Frontpage Query
 * @description Queries Frontpage data - no params needed
 */
export const frontpageQuery = groq`
  *[_type == "frontpage"][0] {
    hero { ${heroQuery} },
    sections[] { ${sectionsQuery} },
    seo { ${seoQuery} },
  }
`

/**
 * Page Query
 * @description params {slug: string, parentSlug: string, grandParentSlug: string}.
 */
export const pageQuery = groq`
  *[
    _type == 'page' && slug.current == $slug &&(!defined(parent._ref) || 
    parent->slug.current == $parentSlug) &&(!defined(parent->parent._ref) || 
    parent->parent->slug.current == $grandParentSlug) 
    ][0] {
    
    title,
    "slug": slug.current,
    hero { ${heroQuery} },
    sections[] { ${sectionsQuery} },
    seo { ${seoQuery} },
  }
`

/**
 * Pages Params Query
 * @description Queries array of slugs in page-tree [page, parent? and grandParent?]. - no params needed
 */
export const pagesParamsQuery = groq`
  *[_type == 'page' && defined(slug.current)][] {
    'slugs': [slug.current],
    defined(parent->slug.current) => {
      'slugs': [parent->slug.current, slug.current]
    },
    defined(parent->parent->slug.current) => {
      'slugs': [parent->parent->slug.current, parent->slug.current, slug.current]
    },
  }
`

/**
 * Settings Query
 * @description Queries settings data - no params needed
 */
export const settingsQuery = groq`
  *[_type == "settings"][0]{
    menu {
      links[] {
        _key,
        ${linkInternalQuery}
      }
    },
    footer,
    pageNotFound,
    defaultSeo { ${seoQuery} },
  }
`
