import { sanityLoad } from '../sanity.load'
import { settingsQuery } from '@/sanity/schemas/documents/settings/settings.query'
import type { TSettings } from '@/sanity/schemas/documents/settings/settings.props'

export async function loadSettings() {
  return await sanityLoad<TSettings>({ query: settingsQuery, tags: ['settings'] })
}
