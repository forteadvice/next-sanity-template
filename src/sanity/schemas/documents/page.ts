import { toUrlSafe } from '@/lib/utils'
import { CogIcon, DashboardIcon, SearchIcon } from '@sanity/icons'
import { groq } from 'next-sanity'
import { defineField, defineType } from 'sanity'
import { heroQuery, type THero } from '../objects/hero'
import { defaultSections, sectionsQuery, type TSections } from '../objects/sections'
import { seoQuery, type TSeo } from '../objects/seo'

export const pageSchema = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  groups: [
    { name: 'settings', icon: CogIcon },
    { name: 'content', icon: DashboardIcon },
    { name: 'seo', title: 'SEO', icon: SearchIcon },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'settings',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      description: 'Unique page identifier. Should preferably be generated.',
      options: {
        source: 'title',
        slugify: toUrlSafe,
      },
      group: 'settings',
      validation: (SlugRule) =>
        SlugRule.custom((self: any) => {
          if (!self || !self?.current) return 'Slug is required'
          const slug = self.current
          if (toUrlSafe(slug) != slug) return 'Slug is not URL-safe'
          return true
        }),
    }),

    defineField({
      name: 'parent',
      title: 'Parent page',
      type: 'reference',
      to: [{ type: 'page' }],
      options: {
        // Filter out the page itself + unpublished pages + 3 level deep pages + pages that, added up, dont count 3 levels
        filter: ({ document }) => {
          return {
            filter: `
            !(_id in $ids) &&
            !(_id in path("drafts.**")) &&
            !defined(parent->.parent._ref) && 
            !(parent._ref in $ids) &&
            count(*[_type == "page" && parent->parent._ref == $id]) == 0 &&
            (
              count(*[_type == "page" && parent._ref == $id]) > 0 && 
              !defined(parent._ref) || 
              count(*[_type == "page" && parent._ref == $id]) == 0
            )
            `,
            params: {
              ids: [document._id, document._id.replace('drafts.', '')],
              id: document._id.replace('drafts.', ''),
            },
          }
        },
      },
      group: 'settings',
    }),

    defineField({
      name: 'hero',
      type: 'hero',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sections',
      type: 'array',
      of: defaultSections,
      group: 'content',
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      parent: 'parent.slug.current',
      grandParent: 'parent.parent.slug.current',
    },

    prepare({ title, slug, parent, grandParent }) {
      const path = `/${[grandParent, parent, slug].filter(Boolean).join('/')}`
      return {
        title,
        subtitle: path,
      }
    },
  },
})

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
    hero ${heroQuery},
    sections[] ${sectionsQuery},
    seo ${seoQuery} ,
  }
`

export type TPage = {
  title?: string
  slug?: string
  hero?: THero
  sections?: TSections
  seo?: TSeo
}

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
}`

export type TPageParams = string[]
