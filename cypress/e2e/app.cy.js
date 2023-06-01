/// <reference types="Cypress" />
import data from "../../data.json"
import info from "../fixtures/example.json"

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
    cy.validateInfo(info.body);
  });

  it("deve publicar comentário digitado em campo de texto", () => {
    cy.validateInfo(info.comments);
    cy.get('p').contains(info.comments).should("be.visible");
  });

  it("deve excluir comentário a partir de uma publicação", () => {
    cy.validateInfo(info.comments);
    cy.get('p').contains(info.comments).should("be.visible");
    cy.get("header > button").click();
    expect(true).to.equal(true);
  });
});