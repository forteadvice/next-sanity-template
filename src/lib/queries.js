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
        },
      },
    },
  },

  // TextImage
  _type == 'textImage' => {
    ...,
    
    textBlock {
      ...,
      text [] {
        ...,
        markDefs[] {
          ...,
            _type == 'internalLink' => {
            'slug': @->slug.current,
          },
        },
      },
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

// Queries
export const pagesPathsQuery = groq`
*[_type == 'page' && defined(slug.current)][] {
  'slug': [slug.current],
  defined(parent->slug.current) => {
    'slug': [parent->slug.current, slug.current]
  },
  defined(parent->parent->slug.current) => {
    'slug': [parent->parent->slug.current, parent->slug.current, slug.current]
  },
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
