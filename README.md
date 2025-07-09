# 🚀 Cypress BDD Automation Framework

![Cypress Version](https://img.shields.io/badge/Cypress-12.17.1-brightgreen)
![BDD](https://img.shields.io/badge/BDD-Cucumber-blue)
![POM](https://img.shields.io/badge/Pattern-Page%20Object%20Model-orange)
![Tests](https://img.shields.io/badge/Tests-OrangeHRM%20Demo-red)

A complete test automation framework combining Cypress with Behavior-Driven Development (BDD) and Page Object Model (POM) patterns.

## 📌 Quick Start

```bash
# 1. Clone repository
git clone https://github.com/kalisthea/cypress-bdd.git
cd cypress-bdd

# 2. Install dependencies
npm install cypress @badeball/cypress-cucumber-preprocessor cucumber prettier --save-dev
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor esbuild


# 3. Run tests
npx cypress open  # Interactive mode
npx cypress run   # Headless mode
```

## 🗂 Folder Structure

```bash
cypress/
├── e2e/
│   ├── features/        # Gherkin test scenarios
│   └── step_definitions # Test implementation
├── fixtures/           # Test data (JSON files)
├── pages/              # Page object classes
├── screenshots/        # Test screenshots
└── support/            # Custom commands
```

## 🚀 Mochawesome Reporter - Quick Guide

### 🏃 Running Tests

```bash
npx cypress run --reporter mochawesome
```

### 🔍 Viewing Reports

Open cypress/mochawesome-report/index.html in browser
