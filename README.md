# Playwright E-commerce Automation

A structured Playwright automation project built using the Page Object Model (POM) for an e-commerce application. The framework is designed to demonstrate clean test architecture, reusable login state, browser configuration management, and maintainable automation practices suitable for a professional QA or SDET role.

## Overview

This project automates the core e-commerce flow:

- user login
- product discovery
- add to cart
- checkout
- order placement
- order verification in the My Orders page

The suite is organized to keep browsing logic, selectors, and reusable browser setup separate from the actual test scenarios.

## Tech Stack

- Playwright
- JavaScript
- TypeScript page objects
- Node.js
- dotenv for environment handling
- HTML reporting

## Project Structure

```bash
Playwright_Ecommerce_Automation/
├── .auth/                     # Local saved auth/session state (ignored by git)
├── fixtures/
│   └── ecomFixtures.ts       # Shared Playwright fixtures for reusable setup
├── page-objects/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── CheckoutPage.ts
│   ├── OrderPage.ts
│   ├── ThankyouPage.ts
│   ├── MyorderPage.ts
│   └── POManager.ts
├── tests/
│   ├── smoke.spec.ts
│   └── ecommerce-order-flow.spec.ts
├── .env.example              # Sample environment variables
├── .gitignore
├── global-setup.ts           # Login flow and storage-state generation
├── package.json
├── playwright.config.js       # Main Playwright configuration
├── README.md
├── tsconfig.json
└── Utills/
```

## Key Design Principles

### 1. Page Object Model (POM)

Each page or functional area has its own class with:

- locators
- page actions
- validation methods

This keeps selectors centralized and avoids duplication across tests.

### 2. Reusable Authentication

The test suite uses Playwright storage state to log in once and reuse a valid session across test runs. This reduces redundant login steps and improves reliability.

### 3. Single Configuration File

The project keeps one active Playwright configuration file instead of multiple duplicate configs. This avoids confusion and inconsistent execution behavior.

### 4. Maintainable Test Cases

Tests focus on business flow and assertions, while page object classes handle the UI interaction details. This makes the suite easier to extend and maintain as the app evolves.

## Login and Session Management

The project uses a global setup flow to:

- open the login page
- log in with environment credentials
- wait for successful authentication
- save browser storage state to `.auth/user.json`

This ensures tests start from an authenticated browser state without repeating login logic for every test.

## Environment Setup

Create a local environment file based on the sample:

```bash
cp .env.example .env
```

Then update the values:

```env
ECOM_USERNAME=your_email@example.com
ECOM_PASSWORD=your_password
```

## Run Tests

Run the complete suite:

```bash
npx playwright test
```

Run only smoke tests:

```bash
npx playwright test --grep @smoke
```

Run only regression tests:

```bash
npx playwright test --grep @regression
```

## Example Test Coverage

The project covers:

- login flow
- product search and selection
- cart validation
- checkout flow
- order success confirmation
- order lookup by order ID

## Why This Project is Interview-Friendly

This project demonstrates practical automation best practices, including:

- modular test architecture
- POM implementation
- CI-friendly configuration
- environment variable usage
- reusable authentication flow
- cleaner separation of concerns
- maintainable automation structure

## Git Hygiene

Sensitive files such as local credentials and browser session data are kept out of source control using `.gitignore`.

## Summary

This framework is built not just to automate tests, but to illustrate how a real-world Playwright project is structured for maintainability, scalability, and professionalism in interviews and automation roles.
