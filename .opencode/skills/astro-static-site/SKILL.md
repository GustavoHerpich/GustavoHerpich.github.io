---
name: astro-static-site
description: Conventions for the Astro 7 static portfolio in this repo - zero client JS by default, typed components, content collections with schemas, i18n routing, SEO component, images, scoped CSS. Load before creating or editing any .astro file, astro.config.mjs or src/content.config.ts.
---

# Astro static site conventions

## Defaults
- Output is static. No SSR adapters, no API routes.
- Zero client JavaScript by default. Never add a `client:*` directive, a UI framework integration (React, Vue, Svelte) or Tailwind unless the OpenSpec requirement demands it AND `design.md` records the decision.
- If you are unsure about an Astro API, read https://docs.astro.build for the INSTALLED version before writing code. Do not invent APIs. If you cannot verify, say so in the report.

## Pages, layouts, components
- Pages only compose: load data, pick a layout, render components. No business logic in pages.
- A layout is a shell with slots (`BaseLayout.astro`). One `<h1>` per page, landmarks `header`, `nav`, `main`, `footer`, a skip link first.
- Components are presentational: props in, markup out. Type props:
  ```astro
  ---
  interface Props { title: string; href?: string }
  const { title, href } = Astro.props;
  ---
  ```
- Keep logic in `src/lib` as pure functions and call it from frontmatter.

## Content
- Collections live in `src/content.config.ts` with a zod schema. An invalid entry MUST fail the build (this is a spec requirement). Verify the current import for `z` and loaders in the Astro docs for the installed version.
- Fetch with `getCollection` once per page. Filter and sort with tested pure functions, not inline in the template.
- Localized fields are explicit (`summary: { 'pt-BR': ..., en: ... }`); a missing locale fails the build.
- Copy never lives hard-coded in components: typed data file now, i18n dictionaries once the i18n change exists.

## SEO and links
- One `Seo` component sets title, description, canonical, Open Graph and hreflang. Every page passes a unique title and description.
- External links with `target="_blank"` also get `rel="noopener noreferrer"`. No third-party scripts, fonts or images from other origins.

## Images and assets
- Use `astro:assets` (`<Image>`), always with `alt`, `width` and `height`. Decorative images use `alt=""`.
- Static files in `public/` only when a URL must be stable (favicon, CV PDF).

## Styles
- Scoped `<style>` per component, BEM-style classes, tokens (custom properties) from `src/styles/`. No inline styles except setting a CSS custom property.

## Scripts (only if a spec requires them)
- Small `<script>` inside the component, typed, no inline `onclick`, works without JS (progressive enhancement), respects `prefers-reduced-motion`.

## Done when
`pnpm verify`, `pnpm e2e` and `pnpm lhci` pass and the page has no layout shift or console errors.
