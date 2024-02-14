export function toUrlSafe(string: string) {
  const urlSafe = string
    .toLowerCase()
    .replaceAll('æ', 'ae')
    .replaceAll('ø', 'oe')
    .replaceAll('å', 'aa')
    .replaceAll(' ', '-')
    .replaceAll(/[^a-z0-9\-]/g, '')
  return urlSafe
}

export function upperFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const pageDocTypes = ['frontpage', 'page']
export const linkableDocTypes = pageDocTypes.map((type) => ({ type }))
