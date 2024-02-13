export function toUrlSafe(string: string): string {
  const urlSafe = string
    .toLowerCase()
    .replaceAll('æ', 'ae')
    .replaceAll('ø', 'oe')
    .replaceAll('å', 'aa')
    .replaceAll(' ', '-')
    .replaceAll(/[^a-z0-9\-]/g, '')
  return urlSafe
}

export function upperFirst(string: string): string | void {
  if (!string) return
  return string.charAt(0).toUpperCase() + string.slice(1)
}
