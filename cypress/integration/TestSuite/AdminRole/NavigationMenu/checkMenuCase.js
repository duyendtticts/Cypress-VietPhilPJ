/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

import CommonPage from "../../../PageObjects/CommonPage.spec";
import LoginPage from "../../../PageObjects/LoginPage"
describe('Test Suite - Check all menu', () =>{
    
    before(function(){
        const loginCase = new LoginPage()
        loginCase.loginFunction("administrator", "qwepoi123")
        }
    )

    it('Check menu Course', () =>{  
        let menuName = 'Courses' 
        const checkMenuCase = new CommonPage()
        checkMenuCase.clickMenuIcon(menuName)
        cy.xpath('//h1', {timeout: 10000}).contains(menuName).should('be.visible')

    })

})