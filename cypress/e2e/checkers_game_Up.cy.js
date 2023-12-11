/// <reference types="cypress" />

describe('Checkers Game UI Validation Test', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('checkersData').then(data => {
      Cypress.env('checkersData', data)
    })
  })

  it('confirms the URL is correct ', () => {
    cy.url().should('eq', Cypress.env('checkersData').urls.base)
  })

  it('confirms the site is responding with status code 200', () => {
    cy.request(Cypress.env('checkersData').urls.base)
      .its('status')
      .should('eq', Cypress.env('checkersData').gameData.expectedStatusCode)
  })

  it('confirms the presence of the title as specified in the fixture ', () => {
    cy.get('h1').contains(Cypress.env('checkersData').gameData.pageTitleText)
  })

  it('checks for the presence of the game board ', () => {
    cy.get('#board').should('exist')
  })
})
