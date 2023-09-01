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
          name: 'Text image',
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
