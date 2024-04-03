import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { media } from 'sanity-plugin-media'
import { presentationTool } from 'sanity/presentation'

import { apiVersion, dataset, projectId, studioUrl } from './src/sanity/lib/sanity.env'
import { schemaTypes } from '@/sanity/schemas'
import { singletons } from '@/sanity/schemas/documents'
import { structure } from '@/sanity/plugins/structure'
import { locate } from '@/sanity/plugins/locate'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes: Set<string> = new Set(singletons)

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId,
  dataset: dataset,
  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included in `singletonActions`
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },

  plugins: [
    structureTool({
      structure,
    }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
    media(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
