import Iframe from 'sanity-plugin-iframe-pane'
import { apiVersion } from '../../../env'
import { groq } from 'next-sanity'

export const defaultDocumentNode = (S, { schemaType }) => {
  const client = S.context.getClient({ apiVersion })
  switch (schemaType) {
    case 'page':
    case 'frontpage':
      // Add prview document types here
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: async (doc) => await resolvePreviewUrl(doc, client),
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}

async function resolvePreviewUrl(doc, client) {
  const baseUrl = window.location.origin
  let urlPath = null

  switch (doc?._type) {
    case 'page':
      const query = groq`
      *[_type == 'page' && _id == $id][0] {
        'path': slug.current,
        defined(parent->slug.current) => {
          'path': parent->slug.current + "/" + slug.current
        },
        defined(parent->parent->slug.current) => {
          'path': parent->parent->slug.current + "/" + parent->slug.current + "/" + slug.current
        },
      }
      `
      const res = await client.fetch(query, { id: doc._id })
      urlPath = res?.path
      break

    default:
      urlPath = ''
  }

  const previewToken = process.env.NEXT_PUBLIC_PREVIEW_TOKEN
  return `${baseUrl}/api/preview?redirect=/${urlPath}&token=${previewToken}`
}
