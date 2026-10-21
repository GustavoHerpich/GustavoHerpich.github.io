# Design: add-i18n

## Decisions
- **Routing: explicit page files per locale, not a dynamic `[locale]` route.** pt-BR pages live in `src/pages/`, English pages in `src/pages/en/`, each a thin wrapper around shared components that receive the locale. Trade-off: a few small duplicated wrapper files, in exchange for explicit per-locale slugs (the workflow page uses `/como-eu-construo` and `/en/how-i-build`) and no routing cleverness. Configure Astro i18n with `defaultLocale: 'pt-BR'`, `locales: ['pt-BR', 'en']` and `routing.prefixDefaultLocale: false`; verify the option names in the docs for the installed Astro version.
- **Dictionaries with compile-time parity.** `src/i18n/pt-BR.ts` exports the source object (no `as const`, so leaves are `string`) and `export type Dictionary = typeof ptBR`. `src/i18n/en.ts` is declared as `Dictionary`, so a missing or extra key fails `astro check`. A unit test also compares key sets recursively as a second safety net.
- **Route map.** `src/i18n/routes.ts` maps a page id to its path per locale; the pure helper `alternatePath(pageId, locale)` feeds the switcher, hreflang and canonical logic. Adding a page means adding one map entry. Trade-off: one small table to maintain, instead of deriving paths by string manipulation.
- **Sitemap alternates** through the `i18n` option of `@astrojs/sitemap` (already installed). No new dependency.
- **Localized content.** Project entries carry `summary` and `highlights` per locale in the schema; a missing locale fails the build.
- **English copy is reviewed by the human.** The agent may draft translations; the human approves every sentence.
- **Lighthouse CI** audits both `/` and `/en/` with unchanged budgets.

## Dependencies introduced
None.
