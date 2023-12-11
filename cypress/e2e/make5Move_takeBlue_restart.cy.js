/// <reference types="cypress" />

describe('Checkers Game Test', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('checkersData').then(data => {
      Cypress.env('checkersData', data)
    })
  })

  it('should make 5 moves, take blue and restart the game', () => {
    const moves = Cypress.env('checkersData').gameData.moves
    const makeAMoveText = Cypress.env('checkersData').gameData.makeAMoveText
    const restartButtonText =
      Cypress.env('checkersData').gameData.restartButtonText
    const selectOrangePieceText =
      Cypress.env('checkersData').gameData.selectOrangePieceText
    const spacesToCheck =
      Cypress.env('checkersData').gameData.initialOrangePiecesPositions
    const orangeImage = Cypress.env('checkersData').gameData.playerColors.orange

    moves.forEach(move => {
      cy.makeMoveAndCheckMessage(move.from, move.to, makeAMoveText)
    })

    cy.get("a[href='./']").contains(restartButtonText).should('exist').click()

    cy.get('#message').should('contain', selectOrangePieceText)

    cy.checkImageOnSpaces(spacesToCheck, orangeImage)
  })
})
