export function scrollToSection(id: string, behavior: ScrollBehavior = 'smooth') {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior, block: 'start' })
  window.history.pushState(null, '', `#${id}`)
}
