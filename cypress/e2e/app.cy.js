/// <reference types="Cypress" />
import data from "../../data.json"

describe("<App />", () => {
  it("Visit my app and check element title", () => {
    cy.visit("/");

    cy.title().should("contain", "Feed");
  });
  it("in the sidebar, nothing should happen when clicking", () => {
    cy.visit("/");

    cy.get("strong").contains(data.name);
    cy.get("span").contains(data.jobTitle);

    cy.contains("Editar seu perfil").click();
    cy.url().should("include", "/#");
  })
});