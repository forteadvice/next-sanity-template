import { apiVersion } from '../../../env'
import { groq } from 'next-sanity'

// Get pages in "tree-structure"
// Init get pages that are root / don't reference a parent page
// Parse root pages to the getPagesWithChildren()
// Not showing drafts - as they then might appear several places
export default async function getPagesInReferenceTree(S) {
  const client = S.context.getClient({ apiVersion })
  const rootQuery = groq`*[_type == "page" && !(_id in path("drafts.**")) && !defined(parent)][]{_id,title}`
  const pages = await client.fetch(rootQuery)
  const structure = await getPagesWithChildren(S, pages)
  return structure
}

// This function loops througt pages, and render
async function getPagesWithChildren(S, pages) {
  const client = S.context.getClient({ apiVersion })
  const structure = []

  for (let i = 1; i <= pages.length; i++) {
    const page = pages[i - 1]
    const childQuery = groq`*[_type == "page" && !(_id in path("drafts.**")) && parent._ref == $id][]{_id,title}`
    const params = { id: page._id.replace('drafts.') }
    const childPages = await client.fetch(childQuery, params)

    if (childPages.length == 0) {
      const rootWithNoChilds = S.documentListItem().schemaType('page').id(page._id)
      structure.push(rootWithNoChilds)
    } else {
      const rootWithChilds = S.listItem()
        .title(page.title)
        .child(
          S.list()
            .title(page.title)
            .items([
              S.documentListItem().schemaType('page').title(page.title).id(page._id),
              S.divider(),
              ...(await getPagesWithChildren(S, childPages)),
            ]),
        )
      structure.push(rootWithChilds)
    }
  }

  return structure
}
