# AI usage policy

AI is a tool in this repository. I own every line that gets merged.

## Workflow
1. **Spec first.** Each change starts as an OpenSpec proposal with requirements and scenarios. I review and edit it before any code exists.
2. **Plan, then build.** The agent reads the spec in read-only mode and reports gaps. Only then does it implement, one small task group at a time.
3. **Tests map to scenarios.** Behavior is proven by tests named after the scenarios they cover.
4. **Gates, not trust.** `pnpm verify`, Playwright + axe and Lighthouse CI run on every PR. A change merges only when they are green.
5. **Archive.** After merge, the change is archived so the spec history stays auditable.

## What AI does here
- Drafts spec text, tasks and boilerplate from my instructions.
- Implements scoped tasks and proposes tests.
- Reviews my diffs for gaps and inconsistencies.

## What I do
- Decide scope, architecture and trade-offs (recorded in `design.md`).
- Review every diff line by line; I can explain all code in this repo.
- Commit, push, merge and deploy myself. The agent has no permission to do so.
- Verify third-party API usage against official docs, since models hallucinate APIs.

## Tools and models
| Period | Tool | Model(s) |
|---|---|---|
| Current | opencode | nemotron-3.5-lightning-free |

## Known limits
- Free models are less reliable at tool calling and long context, so tasks are kept small.
- Generated copy can read as generic; I rewrite public text in my own voice.

## How to audit
- Specs and history: `openspec/specs/` and `openspec/changes/archive/`
- Traceability: commit trailers `Change:`, `Tasks:`, `Assisted-by:`
- Evidence: CI runs on every pull request
