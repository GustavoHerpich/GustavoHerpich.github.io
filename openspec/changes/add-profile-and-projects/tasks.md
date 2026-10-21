## 1. Inputs (human)
- [ ] 1.1 Provide copy: headline, one-sentence positioning, stack groups (Backend, Frontend, Mobile, Cloud and DevOps) and the GitHub, LinkedIn and email links
- [ ] 1.2 Provide the CV as a PDF to place in `public/` (only information you want public), or decide to drop the CV link and edit the profile spec
- [ ] 1.3 Provide verifiable facts for `br-docs-utils`: summary, up to 3 highlights, npm URL and repository URL

## 2. Foundation
- [ ] 2.1 Add `@astrojs/sitemap`; create `src/styles/tokens.css` (color, space, type scale, radius; light and dark via `prefers-color-scheme`; `color-scheme`) and `src/styles/global.css`
- [ ] 2.2 `src/layouts/BaseLayout.astro`: landmarks, skip link as first focusable element targeting `main`, footer; make `src/pages/index.astro` use it
- [ ] 2.3 Pure helper `canonicalUrl` in `src/lib/seo.ts` (tests first), `src/components/Seo.astro` (title, description, canonical, Open Graph) and static `public/robots.txt` with the sitemap line

## 3. Projects
- [ ] 3.1 `src/content/project-schema.ts` (zod) with unit tests first: valid entry, missing field, more than 3 highlights, invalid URL, invalid status
- [ ] 3.2 `src/content.config.ts` with the `projects` collection using that schema
- [ ] 3.3 `src/lib/projects.ts`: `sortProjects` and `selectFeatured`, tests first (order, tie by title, non-featured excluded)
- [ ] 3.4 `src/components/ProjectCard.astro` and the projects section on the home page
- [ ] 3.5 Entry `src/content/projects/br-docs-utils.json` using only the facts from 1.3

## 4. Profile
- [ ] 4.1 `src/data/profile.ts`: typed record (name, headline, positioning, links, stack groups) with the copy from 1.1
- [ ] 4.2 Hero section: name, headline, positioning, GitHub and LinkedIn links above the fold at 360x640; email and CV links in hero or contact
- [ ] 4.3 Stack section: grouped technology names, no bars, percentages or ratings
- [ ] 4.4 Contact section: plain links, no form, no JavaScript

## 5. E2E and budgets
- [ ] 5.1 e2e shell: skip link, no horizontal scroll at 320 and 1440, visible focus on a link, dark palette applied under emulated dark scheme, axe in light and dark
- [ ] 5.2 e2e metadata: title, description, canonical and `og:title` on `/`; `/robots.txt` and `/sitemap-index.xml` return 200 and robots references the sitemap
- [ ] 5.3 e2e profile and projects: hero visible at 360x640, no `progress`, `meter` or `[role=progressbar]` in the stack, links present with JavaScript disabled, `br-docs-utils` card with title, summary, stack tag, repository and npm links
- [ ] 5.4 `pnpm lhci` passes with the real page and unchanged budgets

## 6. Closing (human)
- [ ] 6.1 Review the result with `pnpm preview` at phone width and desktop
- [ ] 6.2 Open the PR from `change/add-profile-and-projects`, CI green, merge, confirm the deploy, then archive the change
