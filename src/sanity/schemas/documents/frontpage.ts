import { DashboardIcon, SearchIcon } from '@sanity/icons'
import { groq } from 'next-sanity'
import { defineField, defineType } from 'sanity'
import { heroQuery, type THero } from '../objects/hero'
import { sectionsQuery, type TSections, defaultSections } from '../objects/sections'
import { seoQuery, type TSeo } from '../objects/seo'

export const frontpageSchema = defineType({
  name: 'frontpage',
  type: 'document',
  groups: [
    { name: 'content', icon: DashboardIcon },
    { name: 'seo', title: 'SEO', icon: SearchIcon },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Frontpage',
      readOnly: true,
      hidden: true,
    }),

    defineField({
      name: 'hero',
      type: 'hero',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sections',
      group: 'content',
      type: 'array',
      of: defaultSections,
    }),

    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
})

/**
 * Frontpage Query
 * @description Queries Frontpage data - no params needed
 */
export const frontpageQuery = groq`
  *[_type == "frontpage"][0] {
    hero ${heroQuery} ,
    sections[] ${sectionsQuery},
    seo ${seoQuery} ,
  }
`

export type TFrontPage = {
  hero?: THero
  sections?: TSections
  seo?: TSeo
}
