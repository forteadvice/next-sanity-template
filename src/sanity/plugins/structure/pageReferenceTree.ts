import { DocumentStore } from 'sanity'
import { StructureBuilder, ListItemBuilder, ListItem, Divider } from 'sanity/structure'
import { groq } from 'next-sanity'
import { map } from 'rxjs/operators'
import { apiVersion } from '@/sanity/lib/sanity.env'

import { DocumentIcon, SchemaIcon } from '@sanity/icons'

type TPageReferenceTree = Array<{
  _id: string
  title: string
  children?: Array<{
    _id: string
    title: string
    children?: Array<{
      _id: string
      title: string
    }>
  }>
}>

export default function pageReferenceTree(S: StructureBuilder, documentStore: DocumentStore) {
  const query = groq`
  *[_type == "page" && !(_id in path("drafts.**")) && !defined(parent)] | order(lower(title) asc) [] {
    _id,
    title,
    'children': *[_type == "page" && !(_id in path("drafts.**")) && parent._ref == ^._id] | order(lower(title) asc) [] {
      _id,
      title,
      'children': *[_type == "page" && !(_id in path("drafts.**")) && parent._ref == ^._id] | order(lower(title) asc) [] {
        _id,
        title,
      }
    }
  }`
  const options = { apiVersion }

  return S.listItem()
    .title('Pages')
    .icon(SchemaIcon)
    .child(() =>
      documentStore.listenQuery(query, {}, options).pipe(
        map((parents: TPageReferenceTree) =>
          S.list()
            .title('Pages')
            .menuItems([
              S.menuItem()
                .title('Add')
                .intent({ type: 'create', params: { type: 'page' } }),
            ])
            .items(buildTree(parents, S)),
        ),
      ),
    )
}

function buildTree(
  parents: TPageReferenceTree,
  S: StructureBuilder,
): (ListItemBuilder | ListItem | Divider)[] {
  return parents.sort().map((parent) => {
    const { _id, title, children } = parent
    if (!children || children.length === 0) {
      return S.documentListItem().title(title).icon(DocumentIcon).schemaType('page').id(_id)
    }

    return S.listItem()
      .title(title)
      .child(
        S.list()
          .title(title)
          .menuItems([
            S.menuItem()
              .title('Add')
              .intent({ type: 'create', params: { type: 'page' } }),
          ])
          .items([
            S.documentListItem().schemaType('page').title(title).id(_id),
            S.divider(),
            ...buildTree(children, S),
          ]),
      )
  })
}
