---
name: clean-code
description: Clean code rules for this repo - small pure functions, intent-revealing names, no speculative abstractions, no dead code, minimal diffs. Load before writing or refactoring any code, and again for a self-review before reporting a task as done.
---

# Clean code

## Functions
- One job per function, about 20 lines at most, at most 3 parameters (otherwise one object parameter with named fields).
- No boolean parameters that switch behavior: split into two functions.
- Early returns instead of nesting; nesting depth 2 at most.
- Side effects at the edges. Logic is pure and lives in `src/lib`; I/O (filesystem, network) stays in loaders and pages.

## Names and constants
- Names reveal intent and use domain terms (project, profile, locale). Ban `data`, `info`, `tmp`, `util`, `helper`, `handle`, `process`.
- No magic numbers or strings: a named constant next to its use, or one shared module if used in several places.

## Duplication and abstraction
- Extract when the same CONCEPT appears twice. Do not merge things that merely look alike.
- Do not add options, parameters, hooks or layers "for the future" (YAGNI).
- No function that only forwards a call, no class with only static methods, no interface with a single implementation.
- Do not re-implement the platform: use `Array` methods, `Intl`, `URL`, `structuredClone`, `Intl.DateTimeFormat` (pt-BR and en dates).

## Comments
- Explain WHY or a trade-off, never WHAT. Delete commented-out code.
- A TODO must name the OpenSpec change that will handle it.

## Scope and diffs
- Touch only files in scope of the task. No drive-by refactors, no reformatting of unrelated code, no new dependency without a `design.md` entry.
- Delete what becomes unused (code, exports, files, dependencies).

## Self-review before reporting
1. Any unused import, variable, export or file? Remove it.
2. Any duplicated logic or constant? Consolidate.
3. Edge cases covered by tests: empty, null or undefined, duplicates, ordering, accents (pt-BR), both locales.
4. Could a reader understand each function from its name and signature?
5. `pnpm verify` is green and I can explain every line I wrote.
