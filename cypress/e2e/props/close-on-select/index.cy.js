/// <reference types="cypress" />
import path from 'path'

context('close-on-select (single)', () => {
  it('should not close on select', () => {
    cy.visit(path.join(__dirname, 'single/without.html'))
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown').children().first().next().click()
    cy.get('.vue-dropdown').should('be.visible')
  })

  it('should not close on remove', () => {
    cy.visit(path.join(__dirname, 'single/without.html'))
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown').children().first().click()
    cy.get('.vue-dropdown').should('be.visible')
  })

  it('should close on select', () => {
    cy.visit(path.join(__dirname, 'single/with.html'))
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown').children().first().next().click()
    cy.get('.vue-dropdown').should('not.be.visible')
  })

  it('should close on remove', () => {
    cy.visit(path.join(__dirname, 'single/with.html'))
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown').children().first().click()
    cy.get('.vue-dropdown').should('not.be.visible')
  })
})

context('close-on-select (multiple)', () => {
  it('should not close on select', () => {
    cy.visit(path.join(__dirname, 'multiple/without.html'))
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown').children().first().next().click()
    cy.get('.vue-dropdown').should('be.visible')
  })

  it('should not close on remove', () => {
    cy.visit(path.join(__dirname, 'multiple/without.html'))
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown').children().first().click()
    cy.get('.vue-dropdown').should('be.visible')
  })

  it('should close on select', () => {
    cy.visit(path.join(__dirname, 'multiple/with.html'))
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown').children().first().next().click()
    cy.get('.vue-dropdown').should('not.be.visible')
  })

  it('should close on remove', () => {
    cy.visit(path.join(__dirname, 'multiple/with.html'))
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown').children().first().click()
    cy.get('.vue-dropdown').should('not.be.visible')
  })
})
