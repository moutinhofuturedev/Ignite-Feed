/* eslint-disable no-undef */
/// <reference types="Cypress" />
import data from '../../data.json'

describe('<App />', () => {
  beforeEach('Visit my app and check element title', () => {
    cy.visit('/')

    cy.title().should('contain', 'Feed')
  })

  it('deve verificar elementos do sidebar', () => {
    cy.get('strong').contains(data.name)
    cy.get('span').contains(data.jobTitle)

    cy.contains('Editar seu perfil').click()
    cy.url().should('include', '/#')
  })
})
