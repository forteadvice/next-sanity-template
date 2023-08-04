import { DocumentsIcon, CogIcon } from '@sanity/icons'

export const deskStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      // Frontpage
      S.documentListItem()
        .title('Frontpage')
        .schemaType('frontpage')
        .id('773862bb-7df1-43c4-9b0f-1a4d125acee6'),

      // Pages
      S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .child(S.documentList().title(`Pages`).schemaType('page').filter('_type == "page"')),
      S.divider(),

      // Settings
      S.documentListItem()
        .title('Settings')
        .icon(CogIcon)
        .schemaType('settings')
        .id('63a6d7d5-94d9-4488-83b0-1714b395b961'),
      S.divider(),
    ])
