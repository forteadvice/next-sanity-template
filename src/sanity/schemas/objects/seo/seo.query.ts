import { groq } from 'next-sanity'

export const seoQuery = groq`{
  title,
  description,
  image {
    hotspot,
    crop,
    asset->{
      url,
      metadata {
        dimensions,
        lqip,
      }
    }
  }
}`
