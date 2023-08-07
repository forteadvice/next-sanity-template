import { groq } from 'next-sanity'

// Partials
const hero = groq`
hero {
  ...,
  image {
    ...,
    asset->,
  }
}

`

const contentBlocks = groq`
contentBlocks[]{
  ...,

  // Text Block
  _type == 'textBlock' => {
    text[] {
      ...,
      markDefs[] {
        ...,
        _type == 'internalLink' => {
          'slug': @->slug.current,
        }
      }
    },
  },

  // MainImage
  _type == 'mainImage' => {
    ...,
    asset->
  },
}
`

// Queries
export const pagesPathQuery = groq`
*[_type == 'page' && defined(slug.current)][] {
  'slug': slug.current,
}
`

export const pageQuery = groq`
*[_type == 'page' && slug.current == $slug][0] {
  ...,
  ${hero},
  ${contentBlocks},
}
`

export const frontPageQuery = groq`
*[_type == 'frontpage'][0] {
  ...,
  ${hero},
  ${contentBlocks},
}
`

export const settingsQuery = groq`
*[_type == 'settings'][0] {
  ...,
  menu {
    links[] {
      title,
      'slug': reference->slug.current,
      _key,
    }
  }
}
`
