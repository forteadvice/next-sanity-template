import { SanityClient, groq } from 'next-sanity'
import { SanityDocument } from 'next-sanity'
import { Iframe } from 'sanity-plugin-iframe-pane'
import { DefaultDocumentNodeResolver } from 'sanity/structure'
import { pageDocumentTypes } from '@/sanity/schemas/documents/_pageDocumentTypes'
import { referencePathQuery } from '@/sanity/queries/helperQueries/referencePath'
import { apiVersion } from '@/sanity/lib/sanity.env'
import { previewToken } from '@/sanity/lib/sanity.env'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  // Get client from structure-context
  const client = S.context.getClient({ apiVersion })

  // Handle page types
  if (pageDocumentTypes.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: async (doc: SanityDocument) => await getPreviewUrl(doc, client),
        })
        .title('Preview'),
    ])
  }

  // Default / the rest
  return S.document().views([S.view.form()])
}

// Customise this function to show the correct URL based on the current document
async function getPreviewUrl(doc: SanityDocument, client: SanityClient) {
  const baseUrl = window.location.origin
  const query = groq`*[_id == $id][0] { 'path': ${referencePathQuery} }`
  const res = await client.fetch(query, { id: doc._id })
  const urlPath = res?.path
  return `${baseUrl}/api/preview?redirect=${urlPath}&token=${previewToken}`
}
