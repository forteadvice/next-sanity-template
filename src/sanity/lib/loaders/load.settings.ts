import { sanityLoad } from '../sanity.load'
import { settingsQuery } from '@/sanity/schemas/documents/settings/settings.query'
import type { TSettings } from '@/sanity/schemas/documents/settings/settings.props'

export async function loadSettings() {
  const settings = await sanityLoad<TSettings>({ query: settingsQuery, tags: ['settings'] });
  
  return settings || { menu: null, footer: null };
}
