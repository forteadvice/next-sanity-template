// import { pageDocuments } from './documents'
// import { pageSingletons } from './singletons'

// export const linkableDocTypes = [...pageSingletons, ...pageDocuments].map((doc) => {
//   return {
//     type: doc?.name,
//   }
// })

// export const pageDocTypes = [...pageSingletons, ...pageDocuments].map((doc) => doc?.name)

export const pageDocTypes = ['frontpage', 'page']
export const linkableDocTypes = pageDocTypes.map((docType) => ({ type: docType }))
