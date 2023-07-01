/* eslint-disable no-undef */

// não usado no momento
Cypress.Commands.add('validateInfo', (comment) => {
  cy.get('textarea').first().click().type(comment)
  cy.get('[data-cy="post-button"]')
    .contains('Publicar')
    .click()
    .should('be.disabled')
})
