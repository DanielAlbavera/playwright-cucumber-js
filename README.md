# Playwright CucumberJS POC

This project is an example of using CucumberJS with Playwright for automation testing. It employs the Page Object Model (POM) pattern and Scenario Context to manage state between steps.
Also implements the Prototype inheritance pattern instead of classes.

## Project Structure

```plaintext
.
├── features
│   ├── navigation.feature
│   ├── steps
│   │   └── home.steps.js
|   |   └── intro.steps.js
│   ├── support
│   │   └── hooks.js
|   |   └── world.js
├── pages
│   ├── base.page.js
│   └── home.page.js
│   └── intro.page.js
├── .eslintrc
├── .prettierrc
└── package.json
```

- data/: Contains constants and fixtures
- features/: Contains .feature files that describe test scenarios in Gherkin language.
  - steps/: Contains step definition files that implement the steps described in the .feature files.
  - support/: Contains all the support files like hooks.js and world.js
    - hooks.support.js: Defines the custom Hooks.
    - world.support.js: Defines the custom Scenario Context.
- pages/: Contains page classes following the Page Object Model pattern with prototype inheritance
- .eslintrc and .prettierrc: ESLint and Prettier configurations.
- package.json: Project dependencies and scripts manager.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/DanielAlbavera/playwright-cucumber-js.git
cd playwright-cucumber-js
```

2. Install dependencies:

```bash
npm install
```

3. Install Chromium:

```bash
npx playwright install chromium
```

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

## ESLint and Prettier Configuration

The project is configured to use ESLint and Prettier to maintain a consistent code style. Ensure you have the appropriate plugins installed in your code editor.
