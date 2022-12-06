/// <reference types="cypress" />
import path from 'path'

let shouldReject = false
const setReject = () => {
  shouldReject = true
}
const setResolve = () => {
  shouldReject = false
}
const finish = () => {
  if (shouldReject) throw Error()
}

context('search:change event', () => {
  it('should not fire event after type something', () => {
    setResolve()
    cy.visit(path.join(__dirname, 'index.html')).then(window => {
      cy.get('.vue-select').click()
      cy.then(() => {
        window.removeEventListener('search:change-custom-event', setReject)
        window.addEventListener('search:change-custom-event', setReject)
      })
      cy.get('.vue-input').type('i')
      cy.then(finish)
    })
  })

  it('should not fire event after direct blur', () => {
    setResolve()
    cy.visit(path.join(__dirname, 'index.html')).then(window => {
      cy.get('.vue-select').click()
      cy.then(() => {
        window.removeEventListener('search:change-custom-event', setReject)
        window.addEventListener('search:change-custom-event', setReject)
      })
      cy.get('#previous-button').click()
      cy.then(finish)
    })
  })

  it('should fire event after type something and blur', () => {
    setReject()
    cy.visit(path.join(__dirname, 'index.html')).then(window => {
      cy.get('.vue-select').click()
      cy.then(() => {
        window.removeEventListener('search:change-custom-event', setResolve)
        window.addEventListener('search:change-custom-event', setResolve)
      })
      cy.get('.vue-input').type('i')
      cy.get('#previous-button').click()
      cy.then(finish)
    })
  })
})
