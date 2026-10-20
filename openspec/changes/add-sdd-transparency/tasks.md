## 1. Data
- [ ] 1.1 Pure parser `parseArchiveEntry` in `src/lib/archive.ts` for folder names (`YYYY-MM-DD-<change-id>` expected; tolerate unknown formats with null date); tests first with fixtures
- [ ] 1.2 Build-time loader that reads `openspec/changes/archive/` and each proposal title

## 2. Page
- [ ] 2.1 Page in both locales: workflow in 5 steps, human checkpoints, policy summary, link to `AI-USAGE.md` and to `openspec/specs/`
- [ ] 2.2 Change history list with title, date and link to the change folder on GitHub; empty state when none
- [ ] 2.3 Footer link on every page; README section "Built with spec-driven development"

## 3. Verification
- [ ] 3.1 e2e and axe on both pages
