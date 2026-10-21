---
name: design-patterns-pragmatic
description: How and when to apply creational, structural and behavioral design patterns in this small TypeScript/Astro codebase, using functions and unions instead of class hierarchies. Load when designing a module, when code grows branching or duplication, or when asked to apply a pattern.
---

# Pragmatic design patterns

Patterns are vocabulary for a concrete problem, not decoration. In this static site most code needs NO pattern; "no pattern needed" is a valid outcome. When a pattern is used, name it and its trigger in `design.md` or the PR note.

## Idiom
Prefer plain functions, closures, records of functions and discriminated unions. Use a class only when you need instance state with lifecycle, which this project almost never does.

## Catalog with triggers
| Pattern | Use when (trigger) | Typical form here |
|---|---|---|
| Factory function (creational) | Building an object needs validation or defaults | `createProject(raw): Project` |
| Builder (creational) | More than 5 optional fields set step by step | rare; otherwise object literal with defaults |
| Singleton (creational) | never | ES module scope already gives one instance |
| Adapter (structural) | An external shape must become an internal type | convert axe results, archive folder names or API data at the boundary |
| Facade (structural) | One simple entry over 2+ subsystems, with at least 2 callers | small module composing SEO + i18n |
| Composite / Decorator (structural) | Nested UI or cross-cutting wrapping | Astro component composition and slots; higher-order function |
| Strategy (behavioral) | 2+ interchangeable algorithms chosen at runtime | `Record<SortKey, Comparator<Project>>` |
| State (behavioral) | Behavior depends on a mode | discriminated union + pure transition function (theme: system/light/dark) |
| Observer (behavioral) | Reacting to client events | native `addEventListener` / `matchMedia`, no custom bus |
| Template method (behavioral) | Fixed skeleton, variable parts | Astro layouts with slots |
| Pipeline / Chain (behavioral) | 3+ sequential pure steps | array of functions applied with `reduce` |

## Example: Strategy without classes
```ts
type Comparator<T> = (a: T, b: T) => number;
const byOrder: Comparator<Project> = (a, b) => a.order - b.order;
const byTitle: Comparator<Project> = (a, b) => a.title.localeCompare(b.title);
export const projectSorters = { order: byOrder, title: byTitle } as const satisfies Record<string, Comparator<Project>>;
export function sortProjects(list: readonly Project[], key: keyof typeof projectSorters): Project[] {
  return list.toSorted(projectSorters[key]);
}
```
Introduce this only once a second sort is actually required by a spec.

## Reject
Abstract classes, DI containers, a Repository over static content, generic `Manager` or `Service` classes, an interface with one implementation, patterns added "for future flexibility".

## Test
Every pattern-based module has unit tests for each variant and for the boundary (invalid input).
