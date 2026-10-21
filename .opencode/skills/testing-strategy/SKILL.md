---
name: testing-strategy
description: Testing rules for this repo with Vitest (unit) and Playwright + axe (e2e) - tests named after OpenSpec scenarios, tests first for lib code, tests that can actually fail, no weakened tests. Load before writing, changing or running any test, or before ticking a task.
---

# Testing strategy

## Mapping from specs
- Each Scenario in a spec delta gets at least one test whose name contains the scenario name:
  `describe('Blocking violation found', () => { it('fails when a serious violation is reported', ...) })`.
- For code in `src/lib`, write the failing test first, then the code.

## Unit tests (Vitest, `src/**/*.test.ts`)
- Pure, fast, no network, no DOM, no filesystem. Arrange / Act / Assert, one behavior per test.
- Use `it.each` for variations. Do not use snapshots for logic. Do not mock your own pure code.
- Always cover: empty input, `null` and `undefined`, duplicates, ordering, accents and pt-BR text, both locales.

## E2E tests (Playwright, `e2e/`)
- Run against `pnpm preview` of the production build. Never against the dev server.
- Always `await page.goto(...)` BEFORE running axe or assertions. A test that analyzes `about:blank` proves nothing.
- Locate by role, label or text, not CSS classes. No `waitForTimeout`; use web-first assertions.
- Per page: axe with the blocking filter, keyboard path (Tab order, skip link), viewport 320 px without horizontal scroll, and both locales once they exist.

## A test must be able to fail
Before ticking a task, prove each new gate works: break the thing on purpose (remove `lang`, lower a score threshold below reality, change an expected value), see it fail for the RIGHT reason, restore, see it pass. Report the evidence.

## Never
- Weaken or delete a test, add `.skip`, raise a timeout, lower a threshold, disable an axe rule or add an ignore to get green. Report the failure and its cause instead.
- Run `pnpm e2e` and `pnpm lhci` in parallel (they use ports).

## Order and done
`pnpm verify` -> `pnpm build` -> `pnpm e2e` -> `pnpm lhci`, sequentially. Tick a task only when its checks exit 0 and you have shown the output. Coverage percentage is not a goal.
