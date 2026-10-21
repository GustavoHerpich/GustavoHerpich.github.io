## ADDED Requirements

### Requirement: Single verification command
The repository SHALL expose `pnpm verify`, which runs lint, type checking, unit tests and a production build, and exits non-zero if any step fails.

#### Scenario: All checks pass
- **WHEN** a developer runs `pnpm verify` on a clean checkout
- **THEN** the command exits with code 0

#### Scenario: A unit test fails
- **WHEN** a unit test fails
- **THEN** `pnpm verify` exits with a non-zero code and reports the failing test

### Requirement: CI blocks regressions
The CI workflow SHALL run on every pull request and SHALL execute verify, the e2e suite and Lighthouse CI.

#### Scenario: Failing check
- **WHEN** any CI step fails on a pull request
- **THEN** the pull request check is reported as failed

### Requirement: Accessibility gate
The e2e suite SHALL fail when any page has an axe violation with impact serious or critical.

#### Scenario: Blocking violation found
- **WHEN** axe reports a violation with impact serious or critical on a tested page
- **THEN** the e2e suite fails

### Requirement: Quality budgets
Lighthouse CI SHALL fail when the mobile score of the home page is below 90 for performance or below 95 for accessibility, best-practices or SEO.

#### Scenario: Performance regression
- **WHEN** a change drops the home page performance score below 90
- **THEN** the Lighthouse CI step fails
