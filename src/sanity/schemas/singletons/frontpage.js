import { frontPageSections } from '../sections'

const sections = frontPageSections.map((section) => ({
  name: section.name,
  type: section.name,
}))

export default {
  name: 'frontpage',
  type: 'document',
  title: 'Frontpage',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Frontpage',
      readOnly: () => true,
      hidden: () => true,
    },
    { name: 'hero', type: 'hero' },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      // import section-elements from /sections/index => {name, type}[]
      of: sections,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    },
  ],
}
