/// <reference types="cypress" />
import path from 'path'

context('search-placeholder', () => {
  it('should have default placeholder', () => {
    cy.visit(path.join(__dirname, 'without.html'))
    cy.get('.vue-select').click()

    cy.get('.vue-select').should('contain.html', 'Type to search')
  })

  it('can customize placeholder', () => {
    cy.visit(path.join(__dirname, 'with.html'))
    cy.get('.vue-select').click()

    cy.get('.vue-select').should('contain.html', 'Search something')
  })
})
