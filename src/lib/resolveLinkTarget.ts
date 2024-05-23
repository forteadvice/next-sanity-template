export function resolveLinkTarget(href: string) {
  const targetBlank = !href.startsWith('/')
  return targetBlank ? '_blank' : undefined
}
