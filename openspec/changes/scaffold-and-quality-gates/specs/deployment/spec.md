## ADDED Requirements

### Requirement: Automatic deployment
A push to the `main` branch SHALL build the static site and deploy it to GitHub Pages.

#### Scenario: Merge to main
- **WHEN** a pull request is merged into `main`
- **THEN** the deploy workflow publishes the new build to the site URL

### Requirement: Reproducible installs
CI and deploy workflows SHALL install dependencies with a frozen lockfile.

#### Scenario: Lockfile drift
- **WHEN** `package.json` and `pnpm-lock.yaml` disagree
- **THEN** the install step fails
