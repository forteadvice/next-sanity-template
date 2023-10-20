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
        // Filter out unpublished pages + the page itself
        filter: ({ document }) => {
          return {
            filter: '!(_id in $ids) && !(_id in path("drafts.**"))',
            params: { ids: [document._id, document._id.replace('drafts.', '')] },
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
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        {
          name: 'textBlock',
          type: 'textBlock',
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
}
