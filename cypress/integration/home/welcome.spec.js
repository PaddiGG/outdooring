/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays two todo items by default', () => {
    cy.get('h1').should('contain.text', 'When')

    const emojis = ['☔️', '🌬', '🚴‍♀️', '🚶‍♂️']
    emojis.forEach((emoji) => cy.get('h2').should('contain.text', emoji))
  })
})
