# Change: Scaffold the site and enforce quality gates

## Why
Every later change needs a verified baseline. Build, lint, tests, accessibility and performance gates must exist in CI from the first commit so no feature merges without evidence.

## What Changes
- Scaffold an Astro + TypeScript (strict) static site with a minimal page
- Add `pnpm verify` (lint, typecheck, unit tests, build)
- Add Playwright + axe smoke test and Lighthouse CI budgets
- Add GitHub Actions: CI on pull requests, deploy to GitHub Pages on main
- Add README with badges and run instructions

## Impact
- Affected specs: quality-gates, deployment
- Affected code: repo root configuration, `.github/workflows/`, `src/`
