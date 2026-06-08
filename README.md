# API Contract Testing Harness

A lightweight contract-testing harness for catching breaking API schema changes before downstream financial and operational services are affected.

## Stack

Node.js, JSON contracts, CI quality gates

## Problem

Distributed systems fail quietly when producers change event shape without coordinating with consumers. This project makes required fields explicit and validates payloads as part of CI.

## Architecture

- JSON contract definitions live under contracts/.
- The validator module checks required fields and returns machine-readable validation results.
- Node's built-in test runner verifies contract failure cases without third-party dependencies.

## Implemented Production Readiness

- Repository-local GitHub Actions workflow runs contract validation on every push.
- Contracts are versioned as source-controlled artifacts.
- Validation output is structured for future CI annotations or report publishing.

## Run And Test

```powershell
npm test
```

## Quality Gates

- Project-specific GitHub Actions workflow included under .github/workflows/ci.yml.
- Generated build outputs and dependency folders are excluded through .gitignore.
- Tests and validation commands are intentionally small enough to run during code review.

## Production Extension Points

- Add provider verification jobs for each upstream service.
- Publish contract reports as CI artifacts.
- Add OpenAPI diff checks for REST interfaces.

## Repository Hygiene

This repository contains original portfolio code only. It does not include employer source code, private resumes, generated binaries, local credentials, or large media files.

