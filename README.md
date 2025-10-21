# Summary

This repository shows my ability to:

- Build and maintain a structured Playwright + TypeScript automation framework
- Use fixtures, decorators, POM pattern, and API clients
- Follow Git best practices, CI/CD, and reporting standards
- Deliver tests that are scalable, maintainable, and readable

# How to Run and Work with the Project

### Installation:

git clone https://github.com/a-mariia/playwright-portfolio.git
cd playwright-portfolio
npm install
npx playwright install

### Setup:

Create a .env file in the project root and add required environment variables
Example:
IMDB_BASE_URL=https://imdb-api.example.com

Recommended IDE: Visual Studio Code + `Playwright Test for VSCode` extension

Now you are ready to run tests!

# Fixtures

This project uses Playwright fixtures for clean and reusable test setup:
UI Fixture - handles browser context, login, navigation
API Fixture - provides authenticated API client for backend checks

# Decorators

The @step decorator is used to wrap Page Object methods in named Playwright steps, which helps to make test reports more readable and structured. The decorator can take either a string or a function that returns a string to name the step (this can be useful when you want to include dynamic values in the step name)

```typescript
@step('Log in as user')
async login(username: string, password: string) {
  // Implementation of login
}
```

# API Client

[APIClient](src/api/APIClient.ts)– low-level wrapper for GET/POST requests
[ImdbService](src/api/ImdbService.ts) – wrapper over APIClient with domain-specific methods (e.g., getMovieById)

# CI/CD

This project has a GitHub Actions workflow configured to run tests on-demand via manual trigger (workflow_dispatch).

1. Go to Actions → Playwright Tests Workflow → Run workflow.
2. Select the branch to run tests on.
3. Click Run workflow.
4. When the workflow completes, download the HTML report from the artifacts.

# Import Aliases

TypeScript path aliases are used to simplify imports, mapping aliases to folders or single files. This approach relies on tsconfig.json paths.
Relative-import approach, which requires ../../ chains - should not be used.

# Code Quality 

This project uses **ESLint**, **Prettier**, and **Husky** to keep the codebase clean and consistent.

- **ESLint** — checks for code errors and enforces best practices.  
- **Prettier** — automatically formats code for consistency.  
- **Husky + lint-staged** — run linters and formatters automatically before each commit.
