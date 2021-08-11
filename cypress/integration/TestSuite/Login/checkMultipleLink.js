/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

import LoginPage from '../../PageObjects/LoginPage'
const testLink = require('../../../fixtures/DataDriven/loginLink.json')

describe('Check link is working or not', () => {
    testLink.forEach( test => {
        it(test.caseName, () =>{
            const loginCase = new LoginPage()
            cy.visit(Cypress.env('url') + test.urlPath)
            loginCase.fillEmail(test.username)
            loginCase.fillPassword(test.password)
            loginCase.submit()
            cy.title().should('be.equal', 'IELTS master')
            cy.xpath('//h1', {timeout: 10000}).contains(test.titleOfPage).should('be.visible')
        })
    } )

})