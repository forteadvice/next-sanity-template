import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, studioUrl } from '@/lib/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
  stega: {
    studioUrl: studioUrl,
    enabled: false,
  },
})
