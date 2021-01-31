import type { Context, CSSRules, Rule, DarkMode } from '../types'

import { tail, escape, buildMediaQuery } from '../internal/util'

let match: RegExpExecArray | null
export const GROUP_RE = /^:(group(?:(?!-focus).+?)*)-(.+)$/

// Wraps a CSS rule object with variant at-rules and pseudo classes
// { '.selector': {...} }
// => { '&:hover': { '.selector': {...} } }
// => { '@media (mind-width: ...)': { '&:hover': { '.selector': {...} } } }
export const decorate = (
  darkMode: DarkMode,
  variants: Record<string, string>,
  { theme, tag }: Context,
): ((translation: CSSRules, rule: Rule) => CSSRules) => {
  // Select the wrapper for a variant
  const applyVariant = (translation: CSSRules, variant: string): CSSRules => {
    // Check responsive
    const screen = theme('screens', tail(variant), '')

    if (screen) {
      return { [buildMediaQuery(screen)]: translation }
    }

    // Dark mode
    if (variant === ':dark' && darkMode === 'class') {
      return { [`.dark &`]: translation }
    }

    // Groups classes like: group-focus and group-hover
    // these need to add a marker selector with the pseudo class
    // => '.group:focus .group-focus:selector'
    if ((match = GROUP_RE.exec(variant))) {
      return { [`.${escape(tag(match[1]))}:${match[2]} &`]: translation }
    }

    // Check other well known variants
    // and fallback to pseudo class or element
    return { [variants[tail(variant)] || '&' + variant]: translation }
  }

  // Apply variants depth-first
  return (translation, rule) => rule.v.reduceRight(applyVariant, translation)
}
