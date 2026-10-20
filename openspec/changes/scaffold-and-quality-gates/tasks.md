## 1. Baseline
- [ ] 1.1 Scaffold Astro (minimal template, TypeScript strict) and set `site` to the Pages URL. Pin Node LTS (`.nvmrc` and `engines`) and pnpm (`packageManager` field, using the locally installed version). Do not overwrite existing README.md, LICENSE, AGENTS.md, AI-USAGE.md, opencode.json, .github/, .opencode/ or openspec/; confirm with `git status` that none were lost.
- [ ] 1.2 Add ESLint, Prettier and `astro check`; scripts `lint`, `typecheck`, `format`
- [ ] 1.3 Add Vitest with one sample pure-function test; script `test`
- [ ] 1.4 Add script `verify` = lint + typecheck + test + build

## 2. E2E and budgets
- [ ] 2.1 Playwright + axe smoke test for `/`, plus a pure helper `blockingViolations(results)` in `src/lib` (impact serious or critical only), unit-tested with sample axe results (tests first)
- [ ] 2.2 Lighthouse CI config with budgets (performance >= 0.90; accessibility, best-practices, seo >= 0.95). run against `astro preview` of the production build, `numberOfRuns: 3`, median score

## 3. CI/CD
- [ ] 3.1 Workflow `ci.yml` on pull_request: frozen-lockfile install, verify, e2e, lhci
- [ ] 3.2 Workflow `deploy.yml` on push to main: build and deploy to GitHub Pages
- [ ] 3.3 README with CI badge, run instructions and a link to AI-USAGE.md

## 4. Verification (human)
- [ ] 4.1 Open a PR with an intentionally failing test and confirm CI blocks it; then revert
- [ ] 4.2 Confirm the site is live on GitHub Pages
- [ ] 4.3 Enable branch protection on `main` requiring the CI check to pass before merge (after the first CI run)
