# GitHub Actions Practice

This repository is a hands-on practice project for learning **GitHub Actions**.

The goal is to explore CI/CD workflows in a real codebase: how to trigger jobs on push and pull requests, install dependencies, run tests, and build an application automatically.

## What this project includes

- A small **Angular** application used as the sample app for the pipelines
- A workflow under `.github/workflows/` that demonstrates a basic CI pipeline:
  - Checkout the repository
  - Set up Node.js
  - Install dependencies with `npm ci`
  - Run tests
  - Build the Angular app

## Why this project exists

This is not a production-ready product. It exists to practice and understand:

- Workflow triggers (`push`, `pull_request`)
- Jobs and steps in GitHub Actions
- Running Node.js-based CI tasks on GitHub-hosted runners
- Automating test and build steps for an Angular project

## Getting started locally

```bash
npm install
npm start
```

Run tests:

```bash
npm test
```

Build the app:

```bash
npm run build
```
