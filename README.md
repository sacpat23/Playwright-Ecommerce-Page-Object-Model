# Playwright E-commerce Automation

A clean and maintainable Playwright automation project built with the Page Object Model (POM) for an e-commerce web application. This repository demonstrates good test automation practices, reusable authentication, scalable UI flow testing, and CI-ready execution.

## Overview

This project automates a typical e-commerce purchase flow:

- login into the application
- browse and select products
- add items to the cart
- proceed to checkout
- place an order
- verify the order in the My Orders section

The test coverage is split between UI actions and page-specific logic so the tests remain readable, scalable, and easier to maintain.

## Features

- Page Object Model architecture
- Reusable login session with Playwright storage state
- Separate page classes for each major screen
- Environment-based credentials using `.env`
- Headless browser configuration for CI compatibility
- HTML reporting for execution results
- Ready for local execution and GitHub Actions runs

## Tech Stack

- Playwright
- JavaScript / TypeScript
- Node.js
- dotenv
- HTML report generation

## Project Structure

```bash
Playwright_Ecommerce_Automation/
├── .auth/                     # Local auth/session state (ignored by Git)
├── .github/
│   └── workflows/
│       └── playwright.yml     # GitHub Actions workflow for CI execution
├── fixtures/
│   └── ecomFixtures.ts       # Shared Playwright fixtures
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
├── .env.example               # Environment variable template
├── .gitignore
├── Dockerfile                 # Containerized Playwright execution setup
├── global-setup.ts            # Reusable login and storage state setup
├── package.json
├── playwright.config.js       # Active Playwright configuration
├── README.md
├── tsconfig.json
├── Utills/
│   └── placeorderTestData.json
└── node_modules/              # Installed dependencies (ignored by Git)
```

## Design Principles

### 1. Page Object Model

Each page object contains the locators and actions related to that screen. This keeps selectors centralized and prevents duplication across tests.

### 2. Shared Authentication

The project logs in once using a global setup and saves the browser state. This allows tests to reuse an authenticated session instead of logging in repeatedly.

### 3. Single Source of Truth for Config

A single Playwright config file is used to avoid confusion, duplication, and inconsistent runs across environments.

### 4. Maintainable Test Logic

Test files focus on business flow and assertions, while page objects handle UI interactions. This keeps the suite organized and easier to extend.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create your local environment file:

```bash
cp .env.example .env
```

3. Add your credentials:

```env
ECOM_USERNAME=your_email@example.com
ECOM_PASSWORD=your_password
```

## Running Tests

Run the full suite:

```bash
npx playwright test
```

Run smoke tests only:

```bash
npx playwright test --grep @smoke
```

Run regression tests only:

```bash
npx playwright test --grep @regression
```

## CI and GitHub Actions

This project is configured to run in GitHub Actions in a headless browser environment, which is necessary for Linux runners without a display server. The Playwright config is set to run headless so the tests can execute reliably in CI.

## Example Coverage

The suite covers:

- login flow
- product selection
- cart validation
- checkout process
- payment/order submission
- verification of the order in My Orders

## Why This Project Is Useful

This repository is a practical example of how a real-world Playwright automation project can be structured for:

- readability
- maintainability
- test reuse
- CI execution
- interview and portfolio readiness

## Git Hygiene

Sensitive files such as local credentials, browser storage, and OS metadata are ignored by Git to keep the repository clean and secure.

## Summary

This project is designed to showcase professional automation practices using Playwright, page object modeling, reusable session management, and CI-friendly execution. It is suitable for learning, portfolio presentation, and real-world test automation workflows.
