import { toUrlSafe } from '@/lib/helpers'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique page identifier. Should preferably be generated.',
      options: {
        source: 'title',
        slugify: toUrlSafe,
      },
      validation: (Rule) => Rule.required(),
    },
    {
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
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          name: 'textSection',
          type: 'textSection',
        },
        {
          name: 'mainImage',
          title: 'Image',
          type: 'mainImage',
        },
        {
          name: 'textImage',
          type: 'textImage',
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    },
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
}
