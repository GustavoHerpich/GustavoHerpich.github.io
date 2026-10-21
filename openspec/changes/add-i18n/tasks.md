## 1. Inputs (human)
- [ ] 1.1 Provide or approve the English copy (headline, positioning, stack labels, project summaries and highlights); the agent may draft, you review every sentence

## 2. Routing and dictionaries
- [ ] 2.1 Configure Astro i18n (default pt-BR without prefix, en under `/en/`) and the sitemap `i18n` option, following the docs for the installed versions
- [ ] 2.2 `src/i18n/pt-BR.ts` (source) and `src/i18n/en.ts` typed as `Dictionary`; unit test comparing key sets recursively (tests first)
- [ ] 2.3 `src/i18n/routes.ts` and pure `alternatePath`, tests first (home pt-BR to en and back, unknown page id)
- [ ] 2.4 Extract all hard-coded copy (layout, profile, sections) into dictionaries; no literal user-facing text left in components
- [ ] 2.5 `src/pages/en/index.astro` as a thin wrapper reusing the same components with locale `en`

## 3. UX and SEO
- [ ] 3.1 Language switcher using `alternatePath`, with `lang` and `hreflang` attributes and an accessible name in the target language
- [ ] 3.2 `<html lang>`, hreflang alternates and x-default in `Seo.astro`; canonical per locale

## 4. Content
- [ ] 4.1 Extend the project schema with localized `summary` and `highlights` (pt-BR and en required), unit tests first; migrate existing entries with the approved English text

## 5. Budgets and e2e
- [ ] 5.1 Add `/en/` to `.lhcirc.json` URLs; `pnpm lhci` passes for both locales
- [ ] 5.2 e2e for `/` and `/en/`: `html lang`, alternates, switcher round trip, sitemap lists both homes, axe in light and dark, no horizontal scroll at 320 px

## 6. Closing (human)
- [ ] 6.1 Read the English page end to end
- [ ] 6.2 Open the PR from `change/add-i18n`, CI green, merge, confirm the deploy, then archive the change
