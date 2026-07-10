import type { SimpleIcon } from 'simple-icons'
import {
  siPython,
  siJavascript,
  siTypescript,
  siReact,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siSupabase,
  siPrisma,
  siKotlin,
  siAndroid,
  siHtml5,
  siCss,
  siTailwindcss,
  siOpenjdk,
  siC,
  siCplusplus,
  siR,
  siPhp,
  siMeta,
  siWhatsapp,
} from 'simple-icons'

const icons: Record<string, SimpleIcon> = {
  Python: siPython,
  Java: siOpenjdk,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  C: siC,
  'C++': siCplusplus,
  R: siR,
  PHP: siPhp,
  React: siReact,
  HTML: siHtml5,
  CSS: siCss,
  'Tailwind CSS': siTailwindcss,
  'Node.js': siNodedotjs,
  Express: siExpress,
  PostgreSQL: siPostgresql,
  Supabase: siSupabase,
  Prisma: siPrisma,
  Kotlin: siKotlin,
  Android: siAndroid,
}

export function getSkillIcon(name: string): SimpleIcon | null {
  return icons[name] ?? null
}

export const brandIcons = {
  meta: siMeta,
  whatsapp: siWhatsapp,
} as const

export type BrandId = keyof typeof brandIcons
