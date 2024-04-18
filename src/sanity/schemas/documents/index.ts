import { pageSchema } from './page'
import { frontpageSchema } from './frontpage'
import { settingsSchema } from './settings'
import { SchemaTypeDefinition } from 'sanity'

export const documents: SchemaTypeDefinition[] = [pageSchema, frontpageSchema, settingsSchema]
