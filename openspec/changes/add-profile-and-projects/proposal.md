# Change: Add site shell, profile and projects showcase

## Why
Visitors need to understand who Gustavo is and see proof of work in under a minute.

## What Changes
- Accessible, responsive base layout (landmarks, skip link, light and dark tokens) with SEO metadata, sitemap and robots.txt
- Profile sections: hero, grouped stack, contact
- Projects showcase driven by a typed content collection, with `br-docs-utils` featured
- Real copy in pt-BR only (localization comes in `add-i18n`)

## Out of scope
- Localization and language switcher (`add-i18n`)
- Theme toggle, animations and micro-interactions (a separate creative change)
- Project detail pages, blog, contact form, analytics, 404 page
- Workflow transparency page (`add-sdd-transparency`)

## Impact
- Affected specs: site-shell, profile, projects-showcase
- New dependency: `@astrojs/sitemap` (see design.md)
- Depends on: scaffold-and-quality-gates (archived)
