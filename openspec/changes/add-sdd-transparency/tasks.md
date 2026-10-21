## 1. Inputs (human)
- [ ] 1.1 Confirm the real folder name format under `openspec/changes/archive/` (from the archived change 1), plus the repository URL and default branch
- [ ] 1.2 Write or approve the workflow copy in both languages (five steps, human checkpoints, policy summary)

## 2. Data
- [ ] 2.1 Pure `parseArchiveEntry` in `src/lib/archive.ts`, tests first with fixtures: the real name from 1.1, an unknown name, an invalid date such as `2026-13-45-x`
- [ ] 2.2 Pure `extractChangeTitle(markdown, fallbackId)` returning the first `# Change:` heading text or the fallback, tests first
- [ ] 2.3 Pure `githubFolderUrl(repo, branch, path)`, tests first
- [ ] 2.4 `src/data/archive-loader.ts`: reads `openspec/changes/archive/` at build time with `node:fs`, uses the pure helpers, returns entries newest first, and returns an empty list when the directory is missing

## 3. Page
- [ ] 3.1 Register `workflow` in the route map with both slugs
- [ ] 3.2 Page in both locales: five steps, human checkpoints, policy summary, links to `AI-USAGE.md` and `openspec/specs/`
- [ ] 3.3 Change history list with title, date and GitHub link; empty state when none
- [ ] 3.4 Footer link on every page for the current locale; README section "Built with spec-driven development"

## 4. Verification
- [ ] 4.1 e2e and axe on both pages; footer link present on `/` and `/en/`
- [ ] 4.2 `pnpm lhci` still passes

## 5. Closing (human)
- [ ] 5.1 Open the PR from `change/add-sdd-transparency`, CI green, merge, confirm the deploy, then archive the change
