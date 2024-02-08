import { FrontPageSections } from '../sections'

const SectionSelection = FrontPageSections.map((section) => ({
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
      of: SectionSelection,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    },
  ],
}
