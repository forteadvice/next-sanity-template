import { pageDocuments } from './documents'
import { pageSingletons } from './singletons'

export const linkableDocTypes = [...pageSingletons, ...pageDocuments].map((doc) => {
  return {
    type: doc?.name,
  }
})
