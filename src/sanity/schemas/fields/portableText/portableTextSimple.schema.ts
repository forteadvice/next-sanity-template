import { defineArrayMember, defineField, defineType } from 'sanity'
import { EarthGlobeIcon, LinkIcon } from '@sanity/icons'
import { linkableDocumentTypes } from '../../documents/_linkableDocumentTypes'

export const portableTextSimpleSchema = defineType({
  name: 'portableTextSimple',
  title: 'Simple Portable Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],

      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Strike', value: 'strike-through' },
        ],

        annotations: [
          defineField({
            name: 'link',
            title: 'Link',
            type: 'flexibleRefs',
            icon: LinkIcon,
          }),
        ],
      },
    }),
  ],
})
