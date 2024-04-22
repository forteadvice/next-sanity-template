import { pageSchema } from './page/page.schema'
import { frontpageSchema } from './frontpage/frontpage.schema'
import { settingsSchema } from './settings/settings.schema'
import { SchemaTypeDefinition } from 'sanity'

export const documents: SchemaTypeDefinition[] = [pageSchema, frontpageSchema, settingsSchema]
