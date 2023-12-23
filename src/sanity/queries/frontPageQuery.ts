import { groq } from 'next-sanity'
import { type TPartialHeroPayload, heroQuery, seoQuery, sectionsQuery, TPartialSeoPayload } from './queryPartials'
import { loadQuery } from "@/sanity/loader/loadQuery";

// {
//   _rev: 'Wec1ze46uX27zSnHX7AAwP',
//   hero: {
//     image: {
//       crop: [Object],
//       hotspot: [Object],
//       _type: 'image',
//       alt: 'Connecting to Care',
//       asset: [Object]
//     },
//     _type: 'hero',
//     tagline: 'The absence of a deep emotional connection',
//     title: 'Connecting to Care'
//   },
//   _createdAt: '2023-08-02T12:40:51Z',
//   title: 'Frontpage',
//   _type: 'frontpage',
//   _updatedAt: '2023-12-20T11:47:36Z',
//   sections: [
//     { _type: 'textSection', text: [Array], _key: 'c1231d2235cb' },
//     {
//       image: [Object],
//       textSection: [Object],
//       _type: 'textImage',
//       _key: '75ad0fb2954a',
//       layout: 'textImage'
//     }
//   ],
//   _id: '773862bb-7df1-43c4-9b0f-1a4d125acee6',
//   seo: {
//     title: 'Page title',
//     image: 'https://cdn.sanity.io/images/sjfhd0gk/production/1281b385ce2ffc0281ddec0e0625524f9b28e8d7-3072x4608.jpg',
//     _type: 'seo',
//     description: 'Some description'
//   }
// }



export type TFrontpagePayload = TPartialHeroPayload & TPartialSeoPayload & {
  sections?: {
    _type: string,
    _key: string,
    [key: string]: any
  }[]
}

const frontpageQuery = groq`
*[_type == 'frontpage'][0] {
  ...,
  ${seoQuery},
  ${heroQuery},
  ${sectionsQuery},
}
`
export function loadFrontpage() {
  return loadQuery<TFrontpagePayload>(
    frontpageQuery,
    {},
    { next: { tags: ['home', 'project'] } },
  )
}
