---
name: css-a11y-performance
description: Semantic HTML, BEM CSS, design tokens, accessibility (WCAG AA, focus, reduced motion) and performance budget rules for the portfolio UI. Load before writing or changing markup, CSS, animation or any interactive element.
---

# Semantic HTML, CSS, accessibility and performance

## Semantics
- Landmarks (`header`, `nav`, `main`, `footer`), one `h1`, headings in order, lists for lists.
- Interactive things are native: `a` for navigation, `button` for actions. Never a `div` with a click handler.
- Meaningful `alt` text, or `alt=""` for decorative images. Icon-only controls get an accessible name. Multiple `nav` elements get `aria-label`.
- Set `lang` on `<html>`; mark language changes inline with `lang`.

## Focus, contrast, motion
- Keep a visible `:focus-visible` style. Never `outline: none` without a replacement. Skip link is the first focusable element.
- WCAG AA contrast (4.5:1 text, 3:1 large text and UI parts). Never use color alone to convey meaning.
- Wrap non-essential animation in `@media (prefers-reduced-motion: no-preference)`. Micro-interactions at most 300 ms. No parallax, no auto-moving content, no cursor trails.

## CSS
- Tokens as custom properties on `:root` (color, space, type scale, radius). Dark theme by redefining tokens under `@media (prefers-color-scheme: dark)`; set `color-scheme`.
- BEM: `.block__element--modifier`, one block per component, no ids for styling, no `!important`, no selector nesting deeper than 2.
- Mobile first with `min-width` queries, `rem` and `clamp()` for fluid type, `max-width: 100%` on media. Must work at 320 px with no horizontal scroll. Prefer logical properties (`margin-inline`).

## Performance budget (Lighthouse CI: perf >= 90, a11y/best-practices/SEO >= 95)
- Zero JS by default. System font stack first; if a webfont is justified, self-host WOFF2 with `font-display: swap`.
- Every image has `width` and `height` to prevent layout shift. No requests to other origins. No render-blocking third-party code.
- Any new animation or script must be re-checked with `pnpm lhci`.

## Theme toggle (only when a spec requires it)
Tiny inline script in `<head>` that applies the stored theme before first paint to avoid a flash; storage access wrapped in try/catch; works without JS via `prefers-color-scheme`.
