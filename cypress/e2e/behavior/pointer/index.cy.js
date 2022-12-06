/// <reference types="cypress" />
import path from 'path'

context('pointer', () => {
  it('should be highlighted', () => {
    cy.visit(path.join(__dirname, 'without-searchable.html'))

    cy.get('.vue-select').click()

    cy.get('.vue-dropdown-item').first().should('have.class', 'highlighted')
  })

  it('should highlight selected option', () => {
    cy.visit(path.join(__dirname, 'highlight-selected.html'))

    cy.get('.vue-select').click()

    cy.get('.vue-dropdown-item').last().should('have.class', 'highlighted')
  })

  it('should only automaticlly scroll to selected option after open', () => {
    cy.visit(path.join(__dirname, 'highlight-selected-with-multiple.html'))

    cy.get('.vue-select').click()
    cy.get('.vue-dropdown-item').first().click()
    cy.get('.vue-dropdown-item').last().click()

    cy.get('.vue-dropdown-item').last().should('have.class', 'highlighted')
  })

  it('should select highlighted item when press enter key', () => {
    cy.visit(path.join(__dirname, 'with-searchable.html'))

    cy.get('.vue-select').click()
    cy.get('.vue-select').trigger('keypress', { key: 'enter' })

    cy.get('.vue-dropdown-item').first().should('have.class', 'selected')
  })

  it('should change highlighted item when press down key', () => {
    cy.visit(path.join(__dirname, 'with-searchable.html'))

    cy.get('.vue-select').click()
    cy.get('.vue-select').trigger('keydown', { key: 'down' })

    cy.get('.vue-dropdown-item').first().should('not.have.class', 'highlighted')
    cy.get('.vue-dropdown-item').first().next().should('have.class', 'highlighted')
  })

  it('should change highlighted item when press up key', () => {
    cy.visit(path.join(__dirname, 'with-searchable.html'))

    cy.get('.vue-select').click()
    cy.get('.vue-select').trigger('keydown', { key: 'up' })

    cy.get('.vue-dropdown-item').first().should('not.have.class', 'highlighted')
    cy.get('.vue-dropdown-item').first().next().next().should('have.class', 'highlighted')
  })

  it('should change highlighted item when mouseenter', () => {
    cy.visit(path.join(__dirname, 'with-searchable.html'))

    cy.get('.vue-select').click()
    cy.get('.vue-dropdown-item').first().next().trigger('mouseenter')

    cy.get('.vue-dropdown-item').first().should('not.have.class', 'highlighted')
    cy.get('.vue-dropdown-item').first().next().should('have.class', 'highlighted')
  })

  it('should change highlighted when filter', () => {
    cy.visit(path.join(__dirname, 'with-searchable.html'))

    cy.get('.vue-select').click()
    cy.focused().type('e')
    cy.get('.vue-dropdown-item').first().should('have.class', 'highlighted')
  })

  it('should keep currenct highlighted if it is still exists after filter', () => {
    cy.visit(path.join(__dirname, 'with-searchable.html'))

    cy.get('.vue-select').click()
    cy.get('.vue-dropdown-item').first().next().next().trigger('mouseenter')
    cy.get('.vue-dropdown-item').first().next().next().should('have.class', 'highlighted')

    cy.focused().type('e')
    cy.get('.vue-dropdown-item').first().next().should('have.class', 'highlighted')
  })

  it('should change highlighted item when mouseenter in filter', () => {
    cy.visit(path.join(__dirname, 'with-searchable.html'))

    cy.get('.vue-select').click()
    cy.focused().type('e')
    cy.get('.vue-dropdown-item').first().next().trigger('mouseenter')

    cy.get('.vue-dropdown-item').first().should('not.have.class', 'highlighted')
    cy.get('.vue-dropdown-item').first().next().should('have.class', 'highlighted')
  })

  it('should not highlight disabled item when press keys', () => {
    cy.visit(path.join(__dirname, 'with-disabled.html'))

    cy.get('.vue-select').click()
    cy.get('.vue-select').trigger('keydown', { key: 'up' })

    cy.get('.vue-dropdown-item').first().should('not.have.class', 'highlighted')
    cy.get('.vue-dropdown-item').first().next().should('have.class', 'highlighted')

    cy.get('.vue-select').trigger('keydown', { key: 'down' })

    cy.get('.vue-dropdown-item').first().should('have.class', 'highlighted')
    cy.get('.vue-dropdown-item').first().next().should('not.have.class', 'highlighted')
  })

  it('should not be able to highlight on disabled item', () => {
    cy.visit(path.join(__dirname, 'with-disabled.html'))

    cy.get('.vue-select').click()
    cy.get('.vue-dropdown-item.disabled').trigger('mouseenter')

    cy.get('.vue-dropdown-item.disabled').should('not.have.class', 'highlighted')
  })

  it('should keep old highlight when try to highlight on disabled item', () => {
    cy.visit(path.join(__dirname, 'with-disabled.html'))

    cy.get('.vue-select').click()
    cy.get('.vue-dropdown-item').first().trigger('mouseenter')
    cy.get('.vue-dropdown-item').first().should('have.class', 'highlighted')
    cy.get('.vue-dropdown-item.disabled').trigger('mouseenter')

    cy.get('.vue-dropdown-item').first().should('have.class', 'highlighted')
    cy.get('.vue-dropdown-item.disabled').should('not.have.class', 'highlighted')
  })

  it('should highlight closest option if original one is unavailable', () => {
    cy.visit(path.join(__dirname, 'removable.html'))

    cy.get('.vue-select').click()
    cy.get('.vue-dropdown-item').first().next().trigger('mouseenter')
    cy.get('.vue-dropdown-item').first().next().trigger('click')
    cy.get('.vue-dropdown-item').first().next().trigger('click')

    cy.get('.vue-dropdown-item').first().next().should('have.class', 'highlighted')

    cy.get('.vue-dropdown-item').first().next().trigger('click')
    cy.get('.vue-dropdown-item').first().next().trigger('click')

    cy.get('.vue-dropdown-item').first().should('have.class', 'highlighted')

    cy.get('.vue-dropdown-item').first().trigger('click')
    cy.get('.vue-dropdown-item').first().trigger('click')
  })
})
