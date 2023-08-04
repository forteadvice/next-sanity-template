import { LinkIcon } from '@sanity/icons'

export default {
  name: 'linkInternal',
  title: 'Link internal',
  type: 'object',
  icon: LinkIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      to: [{ type: 'page' }, { type: 'frontpage' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `${title}`,
      }
    },
  },
}
