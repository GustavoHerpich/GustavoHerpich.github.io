# Design: add-sdd-transparency

## Decisions
- **Pure parsing, thin I/O.** `parseArchiveEntry`, `extractChangeTitle` and `githubFolderUrl` are pure functions in `src/lib/` with unit tests. Reading the directory with `node:fs` lives in a loader outside `lib` (`src/data/archive-loader.ts`) that runs at build time only.
- **Tolerant to the repository layout.** An unknown folder name is listed without a date, a missing proposal falls back to the change id, and a missing archive directory yields an empty list. The site build must never fail because of this page's data. Trade-off: the page silently shows less if the layout changes; the unit tests pin the expected formats.
- **No markdown library.** The title is read from the first `# Change:` heading with a plain match. The list links to the change folder on GitHub instead of rendering artifacts.
- **Route map reuse.** The page is registered as `workflow` in `src/i18n/routes.ts` with its two slugs.
- **Real naming first.** The expected folder format (`YYYY-MM-DD-<change-id>`) is confirmed against the archived change 1 before coding the parser (task 1.1).

## Dependencies introduced
None.
