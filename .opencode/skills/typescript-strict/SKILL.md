---
name: typescript-strict
description: Strict, idiomatic TypeScript rules for this repo (TS strict, noUncheckedIndexedAccess). Load before writing or reviewing any .ts, .mjs or Astro frontmatter code - types, narrowing, unions, error handling, imports, naming.
---

# TypeScript strict style

## Hard rules
- No `any`. No `as` casts to silence an error. No non-null `!`. Narrow with checks instead.
- `noUncheckedIndexedAccess` is on: `arr[0]` is `T | undefined`. Handle it (`?.`, early return, `.at()`), never cast it away.
- No `enum`. Use a string union or an `as const` object:
  `export const LOCALES = ['pt-BR', 'en'] as const; export type Locale = (typeof LOCALES)[number];`
- Exported functions have explicit return types. Locals rely on inference.
- `import type` for type-only imports. No default exports (except where Astro or a tool config requires one). No barrel `index.ts` re-exports.
- No empty `catch`, no swallowed errors, no `console.log` left in code.

## Modeling
- Model states with discriminated unions, not a boolean plus optional fields:
  `type Theme = { mode: 'system' } | { mode: 'manual'; value: 'light' | 'dark' };`
- Expected failures return a result-like union `{ ok: true; value: T } | { ok: false; error: string }`. Throw only for programmer errors or unrecoverable build failures.
- Parse, do not validate repeatedly: validate external data once at the boundary (Astro content schema), then pass typed values inward.
- Use `readonly` arrays and properties for data that must not mutate. Never mutate parameters; return new values (`toSorted`, spread, `map`).
- Use `satisfies` to check a literal against a type while keeping its inferred type.
- Generics only when at least two call sites need them, always constrained (`T extends ...`). Do not use generics to avoid writing a type.
- `type` for unions and aliases, `interface` for object shapes meant to be extended. Stay consistent inside a file.

## Naming
- Functions are verbs (`selectFeatured`). Booleans start with `is`, `has` or `should`.
- No `Utils`, `Helper`, `Manager`, `Data`, `Info`, `tmp` names. Use domain words: project, profile, locale, violation.
- kebab-case file names for `.ts`, PascalCase for `.astro` components.

## Smells to reject (do this instead)
| Smell | Instead |
|---|---|
| `const x = data as Project` | validate at the boundary, then use the inferred type |
| `items[0].title` | `items[0]?.title` or check length first |
| `function f(flag: boolean)` switching behavior | two functions |
| `string` for a closed set of values | union or `as const` list |
| class with only static methods | module with plain functions |

## Done when
`pnpm lint` has zero warnings, `pnpm typecheck` passes, new pure logic has tests next to it.
