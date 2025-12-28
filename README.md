# Playwright SauceDemo E2E Tests

This project contains end-to-end (E2E) tests for the SauceDemo application using a hybrid testing framework. It combines Playwright for web testing and WebdriverIO/Appium for mobile app testing, both using Cucumber BDD framework. The project tests user interactions such as login, browsing inventory, and purchasing products across web and mobile platforms.

## Prerequisites

### For Web Testing (Playwright)

- Node.js (version 14 or higher)
- npm

### For Mobile App Testing (WebdriverIO/Appium)

- Node.js (version 14 or higher)
- npm
- Appium Server
- Android SDK (for Android testing)
- Java JDK (for Appium)
- Android device/emulator or iOS Simulator (depending on target platform)

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. For mobile testing, ensure Appium is installed and running:
   ```bash
   npm install -g appium
   npm install -g appium-uiautomator2-driver
   ```

## Running Tests

### Web Tests (Playwright)

Run the Playwright web tests with:

```bash
npm run test
```

For headed mode (visible browser):

```bash
npm run test:headed
```

### BDD Tests (Cucumber - Web)

Run the Cucumber BDD tests for web with:

```bash
npm run test:bdd
```

### Mobile App Tests (WebdriverIO)

Run the WebdriverIO mobile app tests with:

```bash
npm run wdio
```

This will run the mobile app tests defined in the Cucumber features under `features/mobile-app/`.

## Configuration

### Web Testing Configuration

- **Base URL**: https://www.saucedemo.com
- **Browser**: Chromium (headless by default)
- **Artifacts**: Screenshots, videos, and traces are captured on test failures
- **Config File**: `playwright.config.js`

### Mobile Testing Configuration

- **Runner**: Local Appium server (port 4723)
- **Capabilities**: Configured in `config/` directory
  - `android.local.conf.js` - Local Android device/emulator
  - `android.sauce.device.conf.js` - Sauce Labs real devices
  - `android.sauce.emulator.conf.js` - Sauce Labs emulators
- **Config File**: `wdio.conf.js`

## Project Structure

- `tests/web/`: Playwright test files for web testing
- `tests/mobile-app/`: WebdriverIO test files for mobile app testing
- `features/`: Cucumber feature files
  - `features/login.feature` - Web login features
  - `features/mobile-app/` - Mobile app features
- `pages/`: Page Object Model classes
  - `pages/web/` - Web page objects
  - `pages/mobile-app/` - Mobile app page objects
- `config/`: WebdriverIO configuration files for different environments
- `utils/`: Utility functions (CSV reading, logging, path tools, etc.)
- `fixtures/`: Test data (CSV files)
- `artifacts/`: Screenshots, videos, and traces from test runs
- `report/`: HTML reports

## Reports

- **Playwright HTML Report**: `npm run report`
- **Cucumber Reports**: Generated in `cucumber-report.html` and `cucumber-report.json`

## Cleaning Artifacts

To clean up artifacts, reports, and test results:

```bash
npm run clean
```

## Environment Setup

### Local Mobile Testing

1. Start Appium server:
   ```bash
   appium --address 127.0.0.1 --port 4723
   ```
2. Connect Android device or start emulator
3. Run tests with local configuration

### Sauce Labs Testing

- Configure Sauce Labs credentials in environment variables
- Use appropriate config files from `config/` directory
- Tests will run on Sauce Labs cloud devices/emulators

## Contributing

1. Follow the existing project structure
2. Use Page Object Model for new page interactions
3. Add appropriate test data to `fixtures/` directory
4. Update this README if adding new features or changing configurations
