## ADDED Requirements

### Requirement: Locale routing
The site SHALL serve pt-BR at `/` and English at `/en/`, and every page SHALL exist in both locales.

#### Scenario: English home
- **WHEN** a visitor opens `/en/`
- **THEN** the page is in English and `<html lang>` is `en`

### Requirement: Language switcher
Every page SHALL provide a keyboard-accessible link to the same page in the other locale.

#### Scenario: Switch on a deep page
- **WHEN** a visitor activates the switcher on a project page
- **THEN** the same page opens in the other locale

### Requirement: Alternate links
Every page SHALL declare `hreflang` alternates for both locales and `x-default`.

#### Scenario: Alternates present
- **WHEN** any page is requested
- **THEN** its head lists pt-BR, en and x-default alternates

### Requirement: Dictionary parity
A key present in one locale dictionary and missing in the other SHALL fail type checking or the unit tests.

#### Scenario: Missing English key
- **WHEN** a key is removed from the English dictionary
- **THEN** `pnpm verify` fails

### Requirement: Localized project content
Each project entry SHALL provide its summary and highlights in both locales.

#### Scenario: Missing translation
- **WHEN** a project lacks the English summary
- **THEN** the production build fails
