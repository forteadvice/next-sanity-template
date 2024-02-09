import { LinkIcon } from '@sanity/icons'
import { PageDocuments } from '../documents'
import { PageSingletons } from '../singletons'

const LinkablePages = [...PageDocuments, ...PageSingletons].map((page) => ({ type: page.name }))

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
      to: LinkablePages, // => [{ type: 'page' }, { type: 'frontpage' }],
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
