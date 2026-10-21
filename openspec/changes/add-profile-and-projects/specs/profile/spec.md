## ADDED Requirements

### Requirement: Hero
The home page SHALL show the name, a role headline, a one-sentence positioning statement and links to GitHub and LinkedIn above the fold on a 360x640 viewport. Links to email and CV SHALL be present in the hero or the contact section.

#### Scenario: Recruiter skim
- **WHEN** the home page loads on a 360x640 viewport
- **THEN** name, headline, positioning statement and the GitHub and LinkedIn links are visible without scrolling

#### Scenario: Email and CV links
- **WHEN** the home page renders
- **THEN** it contains a `mailto:` link and a link to the CV file, and the CV link resolves with HTTP 200

### Requirement: Grouped stack without self-rating
The home page SHALL list technologies grouped by area (Backend, Frontend, Mobile, Cloud and DevOps) and SHALL NOT display proficiency bars, percentages or star ratings.

#### Scenario: Stack section
- **WHEN** the stack section renders
- **THEN** it shows grouped technology names and contains no `progress`, `meter` or `[role=progressbar]` element and no percentage text

### Requirement: Contact without backend
Contact options SHALL work without client-side JavaScript and without a contact form.

#### Scenario: JavaScript disabled
- **WHEN** the page is loaded with JavaScript disabled
- **THEN** the email and social links remain visible and functional
