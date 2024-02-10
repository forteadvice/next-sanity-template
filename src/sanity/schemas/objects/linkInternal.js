import { LinkIcon } from '@sanity/icons'

import { pageDocuments } from '../documents'
import { pageSingletons } from '../singletons'

const linkablePages = [...pageDocuments, ...pageSingletons].map((page) => ({ type: page.name }))

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
      to: linkablePages,
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
