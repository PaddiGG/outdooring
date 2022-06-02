import Header from './Header'

describe('header component', () => {
  it('is present', () => {
    cy.mount(<Header />)
    cy.get('nav').should('exist')
  })
})
