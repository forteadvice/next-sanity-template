import { groq } from 'next-sanity'

export const docReferencePathQuery = groq`
  _type == "frontpage" => {
    'path': "/"
  },

  _type == "page" => {
  'title': hero.title,
    'path': slug.current,
    defined(parent->slug.current) => {
      'path': parent->slug.current + "/" + slug.current
    },
    defined(parent->parent->slug.current) => {
      'path': parent->parent->slug.current + "/" + parent->slug.current + "/" + slug.current
    }
  }
`

export const heroQuery = groq`
hero {
  ...,
  image {
    ...,
    asset->,
  }
}
`

export const contentBlocksQuery = groq`
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
