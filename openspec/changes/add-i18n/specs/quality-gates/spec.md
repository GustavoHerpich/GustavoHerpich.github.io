## MODIFIED Requirements

### Requirement: Quality budgets
Lighthouse CI SHALL fail when the mobile score of the home page in either locale (`/` and `/en/`) is below 90 for performance or below 95 for accessibility, best-practices or SEO.

#### Scenario: Performance regression
- **WHEN** a change drops the performance score of the home page in either locale below 90
- **THEN** the Lighthouse CI step fails

#### Scenario: Both locales audited
- **WHEN** Lighthouse CI runs
- **THEN** it audits both `/` and `/en/`
