## 1. Baseline
- [ ] 1.1 Scaffold Astro (minimal template, TypeScript strict) and set `site` to the Pages URL
- [ ] 1.2 Add ESLint, Prettier and `astro check`; scripts `lint`, `typecheck`, `format`
- [ ] 1.3 Add Vitest with one sample pure-function test; script `test`
- [ ] 1.4 Add script `verify` = lint + typecheck + test + build
- [ ] 1.5 Add TailwindCSS with custom color palette and BEM-style utilities for creative design systems
- [ ] 1.6 Configure PostCSS plugins for CSS nesting and autoprefixer

## 2. E2E and budgets
- [ ] 2.1 Playwright + axe smoke test for `/`
- [ ] 2.2 Lighthouse CI config with budgets (performance >= 0.90; accessibility, best-practices, seo >= 0.95)
- [ ] 2.3 Verify Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms

## 3. CI/CD
- [ ] 3.1 Workflow `ci.yml` on pull_request: frozen-lockfile install, verify, e2e, lhci
- [ ] 3.2 Workflow `deploy.yml` on push to main: build and deploy to GitHub Pages
- [ ] 3.3 README with CI badge, run instructions and a link to AI-USAGE.md

## 4. Verification (human)
- [ ] 4.1 Open a PR with an intentionally failing test and confirm CI blocks it; then revert
- [ ] 4.2 Confirm the site is live on GitHub Pages
- [ ] 4.3 Manually test interactive elements: theme toggle, micro-interactions, and creative surprises on both `/` and `/en/`

## 5. Creative portfolio foundations
- [ ] 5.1 Implement a responsive hero section with subtle entrance animations and parallax depth perception
- [ ] 5.2 Add a color-theme toggle (system-preferred + manual switch) using CSS custom properties
- [ ] 5.3 Include at least one unexpected but professional micro-interaction (e.g., cursor trail, card lift on hover, or hover ripple)
- [ ] 5.4 Ensure all creative elements are accessible (keyboard-focusable, respect reduced-motion preferences, aria-labeled)
