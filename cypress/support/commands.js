Cypress.Commands.add('validateInfo', (comment) => {
    cy.get("textarea").first().click().type(comment);
    cy.get("button").contains("Publicar").click().should("be.visible");
})