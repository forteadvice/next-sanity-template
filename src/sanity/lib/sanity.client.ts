import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '@/sanity/lib/sanity.env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
})
