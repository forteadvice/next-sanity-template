import { groq } from 'next-sanity'
import { TSanityNextImage } from './types'

export type TPartialDocReferencePathPayload = {
  path: string,
}
export const docReferencePathQuery = groq`
  _type == "frontpage" => {
    'path': "/"
  },

  _type == "page" => {
    'path': slug.current,
    defined(parent->slug.current) => {
      'path': parent->slug.current + "/" + slug.current
    },
    defined(parent->parent->slug.current) => {
      'path': parent->parent->slug.current + "/" + parent->slug.current + "/" + slug.current
    }
  }
`

export type TPartialportableTextPayload = {
  text: any[]
}
export const portableTextQuery = groq`
text[] {
  ...,
  markDefs[] {
    ...,
    _type == 'internalLink' => {
      ...,
      ...reference->{
        ${docReferencePathQuery}
      }
    },
  },
}`

export type TPartialHeroPayload = {
  hero?: {
    title: string,
    tagline: string,
    image?: TSanityNextImage
  }
}

export const heroQuery = groq`
hero {
  ...,
  image {
    ...,
    asset->,
  }
}
`
export type TPartialSeoPayload = {
  seo?: {
    title?: string,
    description?: string,
    image?: string
  }
}

export const seoQuery = groq`
  seo{
    ...,
    'image': image.asset->url,
  }
`

export const sectionsQuery = groq`
sections[]{
  ...,

  // Text Block
  _type == 'textSection' => {
    ${portableTextQuery},
  },

  // TextImage
  _type == 'textImage' => {
    ...,
    textSection {
      ${portableTextQuery},
    },
    image {
      ...,
      asset->,
    },
  },

  // MainImage
  _type == 'mainImage' => {
    ...,
    asset->
  },
}
`

const Exports = {
  docReferencePathQuery, portableTextQuery, heroQuery, sectionsQuery
}

export default Exports