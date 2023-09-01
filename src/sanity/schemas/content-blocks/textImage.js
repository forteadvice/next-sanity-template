import { ImageIcon } from '@sanity/icons'

export default {
  name: 'textImage',
  title: 'Text Image',
  type: 'object',
  icon: ImageIcon,
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'textBlock',
      title: 'Text block',
      type: 'textBlock',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      initialValue: 'textImage',
      options: {
        list: [
          { title: 'Text image', value: 'textImage' },
          { title: 'Image text', value: 'imageText' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      titleObj: 'textBlock',
      image: 'image',
    },

    prepare({ titleObj, image }) {
      const title = titleObj.text[0].children[0].text

      return {
        title: title,
        subtitle: 'Text Image',
        media: image.asset,
      }
    },
  },
}
