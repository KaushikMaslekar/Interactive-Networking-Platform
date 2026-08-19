# Feature 1 - Foundation

## Goal

Create the production base for the platform so later features can be built on stable frontend, backend, and API conventions.

## Why this feature exists

The platform needs a consistent application shell, module boundaries, and shared contracts before lessons, labs, simulations, and quizzes are implemented. Without this foundation, every later feature would invent its own structure.

## Architecture decisions

### Repository shape

Use a monorepo-style layout with a Next.js frontend and a Spring Boot backend in separate top-level apps.

Reasoning:

- The frontend and backend have different build systems and deployment targets.
- The product will grow into multiple front-end feature areas and backend modules.
- A shared repo keeps navigation, API conventions, and product decisions aligned.

### Frontend stack

Use Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, React Flow, Canvas, Monaco, TanStack Query, and Zustand.

Reasoning:

- App Router gives scalable route and layout control.
- TanStack Query handles server state and caching.
- Zustand is lightweight for UI and simulation state.
- React Flow and Canvas fit visual networking tools.
- Framer Motion supports polished motion without excess complexity.

### Backend stack

Use Spring Boot 3, Java 21, Spring Web, Spring Security, Spring Data JPA, Spring Validation, Spring Actuator, and OpenAPI.

Reasoning:

- Spring Boot is a good fit for clean enterprise APIs.
- The application needs strong module boundaries, validation, and auth-ready service design.
- OpenAPI is required so the frontend can consume a stable contract.

### Domain boundaries

Keep the backend organized by feature modules rather than technical layering alone.

Initial modules:

- auth
- user
- course
- module
- lesson
- simulation
- lab
- quiz
- progress
- achievement
- analytics
- tools
- notification
- common
- config
- security
- exception
- util

### API conventions

- REST-first endpoints
- Consistent response envelope
- Validation on all request DTOs
- JWT access tokens and refresh tokens
- Role-based access control for Student and Admin
- Swagger/OpenAPI documentation for all public endpoints

### Frontend conventions

- Dark-first interface
- Engineering-app style density
- Clear visual hierarchy
- Reusable shell layout for navigation and content areas
- Route-driven feature areas under App Router

## Initial folder structure

- frontend/
- backend/
- docs/

## Feature 1 deliverables

- A frontend app shell with navigation and visual hierarchy
- A backend Spring Boot application scaffold
- Shared response and API conventions documented
- Route and module boundaries ready for Feature 2 and beyond

## Success criteria

Feature 1 is complete when the app has a stable shell, a backend entry point, and a documented architecture that later features can reuse without rework.
