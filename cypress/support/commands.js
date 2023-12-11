// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  'makeMoveAndCheckMessage',
  (fromCell, toCell, messageText) => {
    cy.get(`[name="${fromCell}"]`).click()
    cy.get(`[name="${toCell}"]`).click()
    cy.wait(2000)

    if (messageText) {
      cy.get('#message').should('contain', messageText)
    }
  }
)

Cypress.Commands.add('checkCheckerColor', (selector, colorKey) => {
  const expectedColorImage =
    Cypress.env('checkersData').gameData.playerColors[colorKey]
  cy.get(selector)
    .find('img')
    .invoke('attr', 'src')
    .should('include', expectedColorImage)
})

Cypress.Commands.add('checkImageOnSpaces', (spaces, imageName) => {
  spaces.forEach(space => {
    cy.get(`img[name="${space}"]`, { timeout: 10000 }).should(
      'have.attr',
      'src',
      imageName
    )
  })
})
