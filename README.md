# Playwright SauceDemo E2E Tests

This project contains end-to-end (E2E) tests for the SauceDemo application using Playwright and Cucumber in a hybrid model. It tests user interactions such as login, browsing inventory, and purchasing products.

## Prerequisites

- Node.js (version 14 or higher)
- npm

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Running Tests

### Playwright Tests

Run the Playwright tests with:

```bash
npm run test
```

For headed mode (visible browser):

```bash
npm run test:headed
```

### BDD Tests (Cucumber)

Run the Cucumber BDD tests with:

```bash
npm run test:bdd
```

## Reports

- View Playwright HTML report: `npm run report`
- Cucumber reports are generated in `cucumber-report.html` and `cucumber-report.json`

## Project Structure

- `tests/`: Playwright test files
- `features/`: Cucumber feature files
- `pages/`: Page Object Model classes
- `utils/`: Utility functions (CSV reading, logging, etc.)
- `fixtures/`: Test data (CSV files)
- `artifacts/`: Screenshots, videos, and traces from test runs
- `report/`: HTML reports

## Cleaning Artifacts

To clean up artifacts, reports, and test results:

```bash
npm run clean
```

## Configuration

- Base URL: https://www.saucedemo.com
- Browser: Chromium (headless by default)
- Screenshots, videos, and traces are captured on test failures
