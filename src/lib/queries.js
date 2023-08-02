import { groq } from 'next-sanity'

export const pagesPathQuery = groq`
*[_type == "page" && defined(slug.current)][] {
    'slug': slug.current,
}
`

export const pageQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
    ...,
}
`

export const frontPageQuery = groq`
*[_type == "frontpage"][0] {
    ...,
}
`
