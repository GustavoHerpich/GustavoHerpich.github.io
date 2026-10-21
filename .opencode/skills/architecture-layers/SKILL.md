---
name: architecture-layers
description: Folder structure and dependency rules for the Astro portfolio (pages, layouts, components, lib, content, data, i18n, styles, e2e). Load before creating files or folders, moving code, or deciding where logic belongs.
---

# Architecture and layers

## Map
```
src/
  pages/        routing and composition only
  layouts/      page shells with slots (BaseLayout)
  components/   presentational: props in, markup out
  content/      collection entries (data files); schema in src/content.config.ts
  data/         typed static data (profile, links)
  i18n/         dictionaries and locale helpers
  lib/          pure TypeScript functions, tests next to them (x.ts + x.test.ts)
  styles/       tokens (custom properties), reset, global styles
e2e/            Playwright specs
openspec/       specs, changes, archive (never imported by app code except the build-time archive loader)
```

## Dependency direction
`pages` -> `layouts`/`components` -> `lib`/`data`/`i18n`/`content`. Never the reverse.
- `lib` imports nothing from Astro, the DOM, the filesystem or other layers. It is pure and fully unit tested.
- `components` never fetch data and never import from `pages`.
- No circular imports. No barrel files.

## Where does it go?
| Thing | Place |
|---|---|
| Sort, filter, format, parse, validate | `src/lib` (pure) + test next to it |
| Reading files at build time (e.g. OpenSpec archive) | thin loader module that calls a pure parser from `lib` |
| Copy and labels | `src/i18n` dictionaries (or `src/data` before the i18n change) |
| Repeated markup | component in `src/components` |
| Page frame, head, footer | layout |
| Colors, spacing, type scale | tokens in `src/styles` |
| Third-party script or runtime dependency | needs a `design.md` decision first |

## Rules
- One concept per file. Create a new folder or layer only with a `design.md` decision and at least two files that need it.
- No generic "services", "managers" or repositories over static content. A function in `lib` is enough.
- Keep the public surface small: export only what another module uses.
- Test placement: unit tests next to the file, browser tests in `e2e/`.
- If a task seems to require breaking a rule above, stop and propose a `design.md` edit instead.
