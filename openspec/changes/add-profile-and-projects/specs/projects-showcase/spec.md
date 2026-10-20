## ADDED Requirements

### Requirement: Typed project entries
Each project SHALL be a content-collection entry validated by a schema with title, summary, stack, repository URL, optional demo URL, status (`active`, `maintained` or `planned`), `featured` flag, `order` and at most three highlights.

#### Scenario: Invalid entry
- **WHEN** an entry lacks a required field or has more than three highlights
- **THEN** the production build fails

### Requirement: Featured selection
The home page SHALL show featured projects sorted by `order`, and SHALL NOT feature projects with status `planned`.

#### Scenario: Planned project
- **WHEN** a project has status `planned` and `featured` true
- **THEN** it is excluded from the featured list

### Requirement: Flagship library
The `br-docs-utils` project SHALL be featured and SHALL link to its npm package and its GitHub repository.

#### Scenario: Flagship visible
- **WHEN** the home page renders
- **THEN** a `br-docs-utils` card with both links is present

### Requirement: Card content
Each project card SHALL show title, summary, stack tags and repository link.

#### Scenario: Card render
- **WHEN** a featured project renders
- **THEN** its card contains title, summary, at least one stack tag and a repository link
