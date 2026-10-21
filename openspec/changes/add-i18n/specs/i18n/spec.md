## ADDED Requirements

### Requirement: Locale routing
The site SHALL serve pt-BR at `/` and English at `/en/`, and every page SHALL exist in both locales.

#### Scenario: Portuguese home
- **WHEN** a visitor opens `/`
- **THEN** the page is in Portuguese and `<html lang>` is `pt-BR`

#### Scenario: English home
- **WHEN** a visitor opens `/en/`
- **THEN** the page is in English and `<html lang>` is `en`

### Requirement: Language switcher
Every page SHALL provide a keyboard-accessible link to the equivalent page in the other locale.

#### Scenario: Round trip from the home page
- **WHEN** a visitor activates the switcher on `/`
- **THEN** `/en/` opens and its switcher links back to `/`

#### Scenario: Switcher attributes
- **WHEN** the switcher renders
- **THEN** its link has `lang` and `hreflang` attributes for the target locale and an accessible name written in the target language

### Requirement: Alternate links
Every page SHALL declare `hreflang` alternates for both locales and `x-default`, and the sitemap SHALL list both locale versions.

#### Scenario: Alternates present
- **WHEN** any page is requested
- **THEN** its head lists pt-BR, en and x-default alternates

#### Scenario: Sitemap lists both homes
- **WHEN** the sitemap files are requested
- **THEN** together they contain the URLs of `/` and `/en/`

### Requirement: Dictionary parity
A key present in one locale dictionary and missing in the other SHALL fail type checking or the unit tests.

#### Scenario: Missing English key
- **WHEN** a key is removed from the English dictionary
- **THEN** `pnpm verify` fails

### Requirement: Localized project content
Each project entry SHALL provide its summary and highlights in both locales.

#### Scenario: Missing translation
- **WHEN** a project lacks the English summary
- **THEN** the schema rejects it and the production build fails
