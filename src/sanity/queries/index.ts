import { type TFrontpagePayload, frontpageQuery } from './frontPageQuery';
import { loadSettings } from './settingsQuery';
import { getMetaObject } from './getMetaObject';
import { loadQuery } from "@/sanity/loader/loadQuery";
import { type TPagePayload, paramsToParentSlugs, pageQuery } from './pageQuery'
import { type TPageParams } from './getPagesParams'

/** Loadquery requires server only and connot be mixed with useQuery (livedit) but may be exported from here */

export function loadFrontpage() {
    return loadQuery<TFrontpagePayload>(
      frontpageQuery,
      {},
      { next: { tags: ['home'] } },
    )
  }

export function loadPage(params: TPageParams) {
    const parentParams = paramsToParentSlugs(params)
    return loadQuery<TPagePayload>(
      pageQuery,
      parentParams,
      { next: { tags: ['page'] } },
    )
}

const Exports = {
    loadFrontpage, 
    loadSettings, 
    getMetaObject,
    loadPage
}

export default Exports