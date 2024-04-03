import page from './page'
import frontpage from './frontpage'
import settings from './settings'

export const documents = [page, frontpage, settings]

export const singletons = ['settings', 'frontpage']
export const pageDocumentTypes = ['frontpage', 'page']
export const linkableDocumentTypes = pageDocumentTypes.map((type) => ({ type }))
