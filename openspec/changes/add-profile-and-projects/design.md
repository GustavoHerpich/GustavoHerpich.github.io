# Design: add-profile-and-projects

## Decisions
- **Content ownership.** Bio, headline, claims, metrics, links and the CV come from the human. The agent never invents personal facts, employers, years of experience or numbers. Tasks that need them are blocked until the human supplies them (section 1).
- **Projects as a content collection of JSON files** in `src/content/projects/`, loaded with Astro's glob loader (verify the loader API in the docs for the installed Astro version). Trade-off: JSON has no comments, but it is strict and trivially typed.
- **Schema lives in a plain module** `src/content/project-schema.ts` (zod), imported by `src/content.config.ts`. Reason: `astro:content` cannot be imported by Vitest, so a plain module keeps the schema unit-testable. Trade-off: one extra file.
- **Profile as a typed data file** `src/data/profile.ts` (single record, not a collection). Copy stays in this file until `add-i18n` moves it into dictionaries.
- **Pure selection logic** in `src/lib/projects.ts`: `sortProjects` (by `order` ascending, ties by title) and `selectFeatured` (featured only). Tests first.
- **Project status is `active` or `maintained`.** `planned` was dropped: nothing would display it (YAGNI). It returns when the next projects become real entries.
- **Styling:** tokens (custom properties) in `src/styles/tokens.css`, light and dark through `prefers-color-scheme` only (no toggle in this change), BEM-style classes, system font stack, no webfonts.
- **SEO:** a `Seo.astro` component plus the official `@astrojs/sitemap` integration (needs `site`, already set) and a static `public/robots.txt`. Trade-off: one new dependency instead of a hand-written sitemap; it adds zero client JS.
- **Verification:** axe runs with `page.emulateMedia({ colorScheme })` for light and dark; the no-JS scenario uses a Playwright context with `javaScriptEnabled: false`.

## Dependencies introduced
@astrojs/sitemap
