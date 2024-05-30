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
