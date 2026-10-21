## ADDED Requirements

### Requirement: Semantic page structure
Every page SHALL use the landmarks `header`, `nav`, `main` and `footer`, exactly one `h1`, and a skip-to-content link as the first focusable element.

#### Scenario: Keyboard user skips navigation
- **WHEN** a keyboard user presses Tab once on any page
- **THEN** the skip link receives focus, and activating it moves focus to `main`

### Requirement: Responsive layout
Pages SHALL render without horizontal scrolling from 320 px to 1440 px viewport width.

#### Scenario: Narrow viewport
- **WHEN** the viewport is 320 px wide
- **THEN** the document scroll width equals the viewport width

#### Scenario: Wide viewport
- **WHEN** the viewport is 1440 px wide
- **THEN** the document scroll width equals the viewport width

### Requirement: Color scheme
The site SHALL respect `prefers-color-scheme` and SHALL meet WCAG AA text contrast in both schemes.

#### Scenario: Dark preference
- **WHEN** the user's system prefers a dark color scheme
- **THEN** the site renders with the dark palette

#### Scenario: Contrast in both schemes
- **WHEN** the axe checks run with the light scheme and again with the dark scheme emulated
- **THEN** neither run reports a serious or critical violation

### Requirement: Visible focus
The site SHALL show a visible focus indicator on every interactive element.

#### Scenario: Keyboard focus on a link
- **WHEN** keyboard focus moves to a link
- **THEN** its computed outline style is not `none` and its outline width is greater than 0

### Requirement: Search and social metadata
Every page SHALL define a unique title, description, canonical URL and Open Graph tags. The site SHALL publish a sitemap and a robots.txt.

#### Scenario: Metadata present
- **WHEN** any page is requested
- **THEN** its head contains title, description, canonical and `og:title`

#### Scenario: Sitemap and robots
- **WHEN** `/robots.txt` and `/sitemap-index.xml` are requested
- **THEN** both respond with HTTP 200 and robots.txt references the sitemap
