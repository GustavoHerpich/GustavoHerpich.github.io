## ADDED Requirements

### Requirement: Workflow page
The site SHALL provide a page in each locale that explains the workflow (spec, review, implement, verify, archive), states where a human reviews, and links to `AI-USAGE.md` and to `openspec/specs/` in the repository.

#### Scenario: Page available
- **WHEN** a visitor opens `/como-eu-construo` or `/en/how-i-build`
- **THEN** the page lists the workflow steps and shows both links

### Requirement: Auditable change history
The page SHALL list archived OpenSpec changes, read from the repository at build time, each with title, date and a link to its folder on GitHub.

#### Scenario: Archived changes exist
- **WHEN** the repository contains archived changes
- **THEN** each one appears in the list ordered by date, newest first

#### Scenario: No archived changes
- **WHEN** no archived change exists
- **THEN** the page shows an empty-state message and the build succeeds

#### Scenario: Unexpected folder name
- **WHEN** an archive folder name does not match the expected date format
- **THEN** the entry is listed without a date and the build succeeds

#### Scenario: Title from the proposal
- **WHEN** an archived change has a proposal whose first heading is `# Change: <title>`
- **THEN** the list shows that title, and shows the change id when the heading is missing

### Requirement: Discoverability
Every page footer SHALL link to the workflow page, and the README SHALL contain a section linking to the specs and to `AI-USAGE.md`.

#### Scenario: Footer link
- **WHEN** any page renders
- **THEN** its footer contains a link to the workflow page of the current locale
