import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Settings',
      readOnly: () => true,
      hidden: () => true,
    }),

    // MENU
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [defineArrayMember({ type: 'linkInternal' })],
        }),
      ],
    }),

    // FOOTER
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'address',
          title: 'Address',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // DEFAULT SEO
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo',
      options: {
        collapsed: false,
        collapsible: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    // 404 PAGE
    defineField({
      name: 'pageNotFound',
      title: '404 page',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
