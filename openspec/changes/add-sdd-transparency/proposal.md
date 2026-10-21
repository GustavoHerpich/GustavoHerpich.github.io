# Change: Make the spec-driven workflow visible on the site

## Why
The portfolio must show, not claim, that AI is used with discipline: spec first, tests mapped to scenarios, human review, auditable history.

## What Changes
- A page in each locale explaining the workflow (pt-BR `/como-eu-construo`, en `/en/how-i-build`)
- Build-time list of archived OpenSpec changes read from the repository
- Footer link on every page and a README section pointing to the specs and AI-USAGE.md

## Out of scope
- Rendering full proposals, specs or diffs on the site (the list links to GitHub)
- Any network access at build time
- Editing or translating OpenSpec artifacts

## Impact
- Affected specs: sdd-transparency
- Depends on: add-i18n (route map) and at least one archived change
