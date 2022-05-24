import { mount } from '@cypress/react'
import Header from './Header'

describe('header component', () => {
  it('is present', () => {
    mount(<Header />)
    cy.get('nav').should('exist')
  })
})
