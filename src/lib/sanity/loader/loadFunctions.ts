/*
 * This file contains all loadFunctions - aka ssr sanityClient requests
 */

import 'server-only'

import { loadQuery } from './loadQuery'
import { frontpageQuery } from '../queries/frontpageQuery'

export function loadFrontpage() {
  return loadQuery<any | null>(frontpageQuery, {}, { next: { tags: ['frontpage'] } })
}
