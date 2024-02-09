import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { media } from 'sanity-plugin-media'
import { dashboardTool } from '@sanity/dashboard'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import { presentationTool } from 'sanity/presentation'

import { apiVersion, dataset, projectId } from './src/lib/env'
import { schemaTypes } from '@/sanity/schemas'
import { defaultDocumentNode } from '@/sanity/plugins/structure/defaultDocumentNode'
import { structure } from '@/sanity/plugins/structure'
import { locate } from '@/sanity/plugins/locate'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['frontpage', 'settings'])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
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
      defaultDocumentNode,
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
    dashboardTool({
      widgets: [vercelWidget()],
    }),
    media(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
