import { ImageIcon } from '@sanity/icons'

export default {
  name: 'mainImage',
  title: 'Main image',
  type: 'image',
  icon: ImageIcon,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Important for SEO and accessiblity.',
    },
  ],

  preview: {
    select: {
      title: 'alt',
      image: 'asset',
    },

    prepare({ title, image }) {
      return {
        title,
        subtitle: 'Image',
        media: image,
      }
    },
  },
}
