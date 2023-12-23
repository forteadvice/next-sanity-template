import { groq } from "next-sanity"
import { type TPartialDocReferencePathPayload, docReferencePathQuery } from '@/sanity/queries/queryPartials';
import { loadQuery } from "@/sanity/loader/loadQuery";

type TDefaultSeo = {
  defaultSeo?: {
    description?: string,
    title?: string,
    image?: string,
  },
}
type TMenu = {
  menu: {
    links: (TPartialDocReferencePathPayload & {
        _key: string,
        title: string,
    })[]
  } 
}
type TFooter = {
  footer: { 
    address: string, 
    phone: string, 
    email: string 
  },
}
type TPageNotFound = {
  pageNotFound: {
    body: string,
    title: string,
  }
}

type TSettingsPayload = TMenu & TFooter & TDefaultSeo & TPageNotFound

export const settingsQuery = groq`
*[_type == 'settings'][0] {
  ...,
  defaultSeo{
    ...,
    "image": image.asset->url,
  },
  menu {
    links[] {
      title,
      _key,
      ...reference->{
        ${docReferencePathQuery},
      }
    }
  }
}
` 
export function loadSettings() {
  return loadQuery<TSettingsPayload>(
    settingsQuery,
    {},
    { next: { tags: ['settings', 'home', 'page', 'project'] } },
  )
}