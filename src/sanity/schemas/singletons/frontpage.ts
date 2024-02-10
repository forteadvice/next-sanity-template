import { defineArrayMember, defineField, defineType } from 'sanity'
import { frontPageSections } from '../sections'

const sections = frontPageSections.map((section) =>
  defineArrayMember({
    name: section.name,
    type: section.name,
  }),
)

export default defineType({
  name: 'frontpage',
  type: 'document',
  title: 'Frontpage',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Frontpage',
      readOnly: () => true,
      hidden: () => true,
    }),

    defineField({
      name: 'hero',
      type: 'hero',
    }),

    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      // import section-elements from /sections/index => {name, type}[]
      of: sections,
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    }),
  ],
})
