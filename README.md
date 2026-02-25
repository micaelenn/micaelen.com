<div align="center">
  <img width="70" height="70" alt="image" src="https://github.com/user-attachments/assets/8bb86be1-0b61-49b8-a5e0-a3a2a0460554" />
</div>


# My Personal Website

## Requirements
- [Node.js](https://nodejs.org/en) - 22+
- [Plop](https://plopjs.com/) - Installed globally

## Technologies
- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Sanity](https://www.sanity.io/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

## Getting Started

Install dependencies

```
npm install
```

Generate .env file

```
npm run env
```

Development mode

```
npm run dev
```

Production build

```
npm run build
```

## Development Tools

To ensure consistency and speed up development, this project uses [Plop.js](https://plopjs.com/) as a code generator to create the initial structure for components and layouts.

**1. Install plop globally**

```
npm install -g plop
```

**2. Generate structure**

Run the `plop` command at the root of the directory and set the name of the component or layout to be generated:

- **component** - new file structures for a new component.
- **layout** - new file structures for a new route and layout.

## Testing Strategy

### Jest (Unit & Component Tests)

[Jest](https://jestjs.io/) is used for unit and component testing. It verifies isolated logic, React components, and utility functions.

**Run tests locally**

```
npm run test
```

### Cypress (End-to-End Tests)

[Cypress](https://www.cypress.io/) is used for end-to-end (E2E) testing. It simulates real user interactions in the browser, ensuring that the application works correctly from the user’s perspective.

**Run Cypress in interactive mode**

```
npm run cy:open
```

### When to Use Each

- Use **Jest** to test logic, components, and isolated behaviors.
- Use **Cypress** to test complete user flows and integration scenarios.

Both tools are complementary and help maintain a reliable and production-ready application.