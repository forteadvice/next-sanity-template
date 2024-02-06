import { DocumentsIcon, HomeIcon, CogIcon, SchemaIcon } from '@sanity/icons'
import { apiVersion } from '../../../env'
import getPagesInReferenceTree from './getPagesInReferenceTree'

export const deskStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      // Frontpage
      S.documentListItem()
        .title('Frontpage')
        .schemaType('frontpage')
        .icon(HomeIcon)
        .id('773862bb-7df1-43c4-9b0f-1a4d125acee6'),

      // Pages - reference tree
      S.listItem()
        .title('Pages')
        .icon(SchemaIcon)
        .child(async () =>
          S.list()
            .title('Pages')
            .items(await getPagesInReferenceTree(S)),
        ),

      // Unsorted pages
      S.listItem()
        .title('Pages (unsorted)')
        .icon(DocumentsIcon)
        .child(
          S.documentList()
            .title(`All Pages`)
            .schemaType('page')
            .apiVersion(`v${apiVersion}`)
            .filter('_type == "page"'),
        ),

      S.divider(),

      // Settings
      S.documentListItem()
        .title('Settings')
        .icon(CogIcon)
        .schemaType('settings')
        .id('63a6d7d5-94d9-4488-83b0-1714b395b961'),
    ])
