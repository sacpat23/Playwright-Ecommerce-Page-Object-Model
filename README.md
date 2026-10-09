# Playwright E-commerce Automation

This project is organized to demonstrate a clean and interview-ready Playwright setup.

## Project structure

- `playwright.config.js` — single active configuration file
- `global-setup.ts` — one-time login flow that creates storage state
- `fixtures/ecomFixtures.ts` — shared fixtures and reusable test context
- `page-objects/` — page object classes for maintainable selectors and actions
- `tests/` — scenario-based Playwright tests
- `.auth/` — local browser state, ignored by Git

## Login reuse

The project uses Playwright storage state so the app logs in once and then reuses the authenticated session across tests. This reduces repeated login work and avoids flaky test behavior caused by duplicated setup.

## Maintainability

- selectors are centralized in page objects
- test logic stays focused on scenarios
- reusable fixtures reduce duplication
- one global setup keeps environment initialization consistent

## Best practices used here

- single config file instead of duplicate configs
- no hardcoded login in every individual test
- local auth state saved outside source control
- page-object model for readability and scalability

## Run tests

1. Copy `.env.example` to `.env`
2. Fill in your credentials
3. Run:

```bash
npx playwright test
```
