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
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: toUrlSafe,
      },
      validation: (Rule) => Rule.required(),
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
