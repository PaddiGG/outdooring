import { mount } from 'cypress/react'

//Ensure global styles are loaded
import '../../styles/globals.css'

Cypress.Commands.add('mount', mount)
