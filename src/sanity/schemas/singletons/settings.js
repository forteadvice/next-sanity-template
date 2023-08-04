export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Settings',
      readOnly: () => true,
      hidden: () => true,
    },

    // MENU
    {
      name: 'menu',
      title: 'Menu',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [{ type: 'linkInternal' }],
        },
      ],
    },

    // FOOTER
    {
      name: 'footer',
      title: 'Footer',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        { name: 'phone', title: 'Phone', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.required() },
      ],
    },

    // DEFAULT SEO
    {
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo',
      options: {
        collapsed: false,
        collapsible: true,
      },
      validation: (Rule) => Rule.required(),
    },

    // 404 PAGE
    {
      name: 'pageNotFound',
      title: '404 page',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 2,
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}
