/// <reference types="Cypress" />
import data from "../../data.json"

describe("<App />", () => {
  beforeEach("Visit my app and check element title", () => {
    cy.visit("/");

    cy.title().should("contain", "Feed");
  });

  it("deve verificar elementos do sidebar", () => {
    cy.get("strong").contains(data.name);
    cy.get("span").contains(data.jobTitle);

    cy.contains("Editar seu perfil").click();
    cy.url().should("include", "/#");
  });

  it("deve clicar no campo antes de digitar e mostrar botão de publicar", () => {
    cy.get("strong").contains("Deixe seu comentário").should("be.visible");
    cy.get("[data-cy='text']").first().click().type("Muito boa publicação");
    cy.get("[data-cy='submit']").contains("Publicar").should("be.visible");
  });

  it("deve publicar comentário digitado em campo de texto", () => {
    const comment = "Ei, sua publicação é muito legal...";

    cy.get("[data-cy='text']").first().click().type(comment);
    cy.get("[data-cy='submit']").contains("Publicar").click();
    cy.get('p').contains(comment).should("be.visible");
  });
});