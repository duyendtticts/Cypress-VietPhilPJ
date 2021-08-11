/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

import CommonPage from "../../../PageObjects/CommonPage.spec";
import LoginPage from "../../../PageObjects/LoginPage"
describe('Test Suite - Check all menu', () =>{
    beforeEach(function(){
        cy.visit('https://elearning.hoola.edu.vn/login/')
        const loginCase = new LoginPage()
        loginCase.fillEmail('administrator')
        loginCase.fillPassword('qwepoi123')
        loginCase.submit()
    })

    it.skip('Check menu Course', () =>{
        let menuName = 'Courses'
        const checkMenu = new CommonPage()
        checkMenu.clickMenubutton(menuName)
        cy.xpath('//h1', {timeout: 10000}).contains('Courses').should('be.visible')


    })

    it('Click all menu on left sidebar', () =>{
        // menuCount = cy.get('.nav-item').length 
        cy.get('.nav-item').each( () =>{
            const menuLength = cy.get('.nav-item').its(length)
            for(let i=1; i<=41; i++){
                cy.xpath('//ul[@class="nav nav-pills nav-sidebar flex-column nav-flat"]/li[@class="nav-item"]['+ i + ']').click();
                const checkHeaderText = new CommonPage();
                checkHeaderText.checkTextHeaderShouldNotEqual('500 Server Error');
            }
        })
    })
            
})