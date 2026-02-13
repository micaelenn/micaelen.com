/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByDataID(value: string): Chainable<JQuery<HTMLElement>>
  }
}
