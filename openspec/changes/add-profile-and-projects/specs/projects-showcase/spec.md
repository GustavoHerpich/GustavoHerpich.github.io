## ADDED Requirements

### Requirement: Typed project entries
Each project SHALL be a content-collection entry validated by a schema with title, summary, stack, repository URL, optional demo URL, optional package URL, status (`active` or `maintained`), `featured` flag, `order` and at most three highlights. All URLs SHALL be valid https URLs.

#### Scenario: Invalid entry
- **WHEN** an entry lacks a required field, has more than three highlights, has an invalid status or has a URL that is not a valid https URL
- **THEN** the schema rejects it and the production build fails

### Requirement: Featured selection
The home page SHALL show only projects with `featured` true, sorted by `order` ascending, with ties broken by title.

#### Scenario: Non-featured project
- **WHEN** a project has `featured` false
- **THEN** it is excluded from the featured list

#### Scenario: Order
- **WHEN** featured projects have different `order` values, or equal values with different titles
- **THEN** they are listed by `order` ascending and then by title

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
