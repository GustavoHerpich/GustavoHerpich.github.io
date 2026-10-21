---
name: openspec-authoring
description: How to write and review OpenSpec artifacts in this repo (proposal, design, tasks, spec deltas with SHALL requirements and WHEN/THEN scenarios) without scope creep. Load when exploring, proposing, updating or auditing a change. Not for implementing code.
---

# Authoring OpenSpec artifacts

## Mode
When drafting or auditing, edit artifacts only (proposal, design, tasks, spec deltas). Do not write application code. Do not change artifacts outside the confirmed scope. Write artifacts in English.

## Spec deltas
```
## ADDED Requirements

### Requirement: <Name>
The system SHALL <observable behavior>.

#### Scenario: <Name>
- **WHEN** <trigger>
- **THEN** <observable result>
```
(also `## MODIFIED Requirements` and `## REMOVED Requirements`)
- Every requirement uses SHALL or MUST and has at least one scenario.
- A scenario must be observable and able to FAIL. No vague words ("fast", "nice", "works well"): use numbers, selectors, status codes.
- Each scenario names how it is verified: unit test, e2e test, CI behavior or human check.

## Tasks
- Small (one session), checkable, ordered. Each task traces to a requirement. Tests come first for `src/lib` code.
- Tasks only a human can do go under a `(human)` section (GitHub settings, merges, manual checks).
- No task without a requirement. No task for tooling that `design.md` rejects. Never add or reword tasks while implementing; propose the artifact edit instead.

## Design
- Record decisions with trade-offs and the full dependency list. A new dependency or layer requires an entry before implementation.

## Scope
- One concern per change. Creative or UX features (themes, motion, interactions) get their own change with constraints: accessibility (axe), performance budgets, `prefers-reduced-motion`, minimal JS, keyboard access.
- The proposal lists what is OUT of scope.

## Ready-for-review checklist
1. Traceability: Requirement -> Scenario -> Task -> Test, with no gaps.
2. No contradiction with `design.md` or `config.yaml`.
3. Dependencies listed, none rejected by the design.
4. Decisions that need a human are listed explicitly.
5. `openspec validate <change-id> --strict` passes.
