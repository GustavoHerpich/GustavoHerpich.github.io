# Change: Add bilingual support (pt-BR and en)

## Why
Remote roles abroad require English; Brazilian roles favor Portuguese. Both audiences must get a complete site.

## What Changes
- Locale routing: pt-BR at `/`, en at `/en/`
- Typed dictionaries with compile-time parity
- A route map so every page has an equivalent path in each locale
- Language switcher, hreflang links and sitemap alternates
- Localized project content and English copy
- Lighthouse CI also audits `/en/`

## Out of scope
- Automatic language detection or redirects based on the browser language
- Translating OpenSpec artifacts or AI-USAGE.md (they stay in English)
- Theme toggle and motion (a separate creative change)
- Workflow transparency page (`add-sdd-transparency`)

## Impact
- Affected specs: i18n (new), quality-gates (modified: budgets for both locales)
- Affected code: `src/i18n/`, pages, components, project schema and entries, `.lhcirc.json`
- Depends on: add-profile-and-projects (archived)
