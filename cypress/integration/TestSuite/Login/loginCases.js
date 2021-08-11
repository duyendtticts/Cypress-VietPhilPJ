/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

import LoginPage from '../../PageObjects/LoginPage'

describe('Check link is working or not', () => {
    // beforeEach(() => {
    //     // now this runs prior to every test
    //     // across all files no matter what
    //     const newSession = new CommonFunc()
    //     newSession.clearSession()
    //   })
    let dataInfo
    beforeEach(function(){
        cy.fixture('example.json').then(function(data){
            dataInfo = data
        } )
    })

    it('case Name', () => {
        cy.visit(Cypress.env('url') + dataInfo.urlPath)
        // cy.visit(this.dataInfo.urlAdress)
        const loginCase = new LoginPage()
        loginCase.fillEmail(dataInfo.username)
        loginCase.fillPassword(dataInfo.password)
        loginCase.submit()
        cy.title().should('be.equal', 'IELTS master')
        cy.xpath('//h1', {timeout: 10000}).contains(dataInfo.titleOfPage).should('be.visible')
    })
})