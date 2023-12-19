export function toUrlSafe(str) {
  const urlSafe = str
    .toLowerCase()
    .replaceAll('æ', 'ae')
    .replaceAll('ø', 'oe')
    .replaceAll('å', 'aa')
    .replaceAll(' ', '-')
    .replaceAll(/[^a-z0-9\-]/g, '')
  return urlSafe
}

export function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}