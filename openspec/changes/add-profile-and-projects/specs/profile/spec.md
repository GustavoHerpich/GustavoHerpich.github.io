## ADDED Requirements

### Requirement: Hero
The home page SHALL show the name, a role headline, a one-sentence positioning statement and links to GitHub, LinkedIn, email and CV above the fold on a 360x640 viewport.

#### Scenario: Recruiter skim
- **WHEN** the home page loads on a 360x640 viewport
- **THEN** name, headline and at least the GitHub and LinkedIn links are visible without scrolling

### Requirement: Grouped stack without self-rating
The home page SHALL list technologies grouped by area (Backend, Frontend, Mobile, Cloud and DevOps) and SHALL NOT display proficiency bars, percentages or star ratings.

#### Scenario: Stack section
- **WHEN** the stack section renders
- **THEN** it shows grouped technology names and no numeric self-assessment

### Requirement: Contact without backend
Contact options SHALL work without client-side JavaScript and without a contact form.

#### Scenario: JavaScript disabled
- **WHEN** JavaScript is disabled
- **THEN** the email and social links remain visible and functional
