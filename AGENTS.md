## Working agreement (human + AI)

### Spec-driven rules
1. Do not write code without an approved OpenSpec change in `openspec/changes/<id>/`. If asked to, stop and propose a change first.
2. Before coding, read `openspec/config.yaml` and the change's `proposal.md`, `design.md` (if present), `tasks.md` and spec deltas.
3. Implement only the tasks you were asked to, one task group per session. Do not expand scope. If the spec is wrong or ambiguous, stop and propose a spec edit instead of improvising.
4. Tests first for pure logic (`src/lib`). Every Scenario touched needs a test; name the test after the requirement/scenario.
5. Run `pnpm verify` before marking a task done. Tick the checkbox in `tasks.md` only when it passes.
6. No new dependency without a justification recorded in `design.md`.
7. Never read, print or commit secrets. Never run `git commit`, `git push`, publish or deploy commands: the human does that.
8. Finish every session with a report: files changed, tests added, `pnpm verify` result, open questions.
9. Do not edit proposal.md, design.md or spec files, and do not add, remove or reword tasks. In tasks.md you may only tick checkboxes. If an artifact needs a change, stop and propose the edit to the human.
10. Tasks under a section marked "(human)" are never implemented by the agent. Skip them and mention them in the report.

### Code style
- TypeScript strict, no `any`. Prefer small pure functions. No abstraction without two real uses.
- Semantic HTML first. Zero client-side JS unless a spec requires it. CSS custom properties, BEM-style class names.

### Commit convention (applied by the human)
`type(scope): summary`
Trailers: `Change: <change-id>`, `Tasks: <ids>`, `Assisted-by: opencode (<model>)`
