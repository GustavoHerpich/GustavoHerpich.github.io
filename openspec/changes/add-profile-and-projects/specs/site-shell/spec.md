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

### Requirement: Color scheme and focus
The site SHALL respect `prefers-color-scheme`, SHALL show a visible focus indicator on every interactive element, and SHALL meet WCAG AA text contrast.

#### Scenario: Dark preference
- **WHEN** the user's system prefers a dark color scheme
- **THEN** the site renders with the dark palette

### Requirement: Search and social metadata
Every page SHALL define a unique title, description, canonical URL and Open Graph tags. The site SHALL publish a sitemap and a robots.txt.

#### Scenario: Metadata present
- **WHEN** any page is requested
- **THEN** its head contains title, description, canonical and `og:title`
