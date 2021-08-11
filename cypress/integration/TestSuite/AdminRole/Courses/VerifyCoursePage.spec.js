/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

import LoginPage from '../../../PageObjects/LoginPage'
import NavigationMenu from '../../../PageObjects/NavigationMenuPage.spec'
import VerifyFunctions from '../../../PageObjects/VerifyFunction.spec'
// import CommonPage from '../../../PageObjects/CommonPage.spec'

describe('Verify the Course Page case list', () =>{
    beforeEach( () => {
        // prepare before each case(it) 
        let menuName = 'Courses'
        const clickMenu = new NavigationMenu() // initial the navigation menu class
        //go to elearning site and login successfully
        const loginCase = new LoginPage()
        loginCase.loginFunction("administrator", "qwepoi123")
        //go to Course Page via clicking Course menu
        cy.wait(500)
        clickMenu.clickMenuButton(menuName)   
    })

    it('Verify all elements on the page', () => {
        
        const verifyAllElements = new VerifyFunctions()
        //check breadcrumb on page are visible: Home/ Management / Courses
        verifyAllElements.VerifyBreadCrumbLink('Home')
        verifyAllElements.VerifyBreadCrumbLink('Management')
        verifyAllElements.VerifyBreadCrumbLink('Courses')
        //verify 
        verifyAllElements.VerifyButton('Show/Hide columns')
        verifyAllElements.VerifyButton('Search')
        verifyAllElements.VerifyButton('Go')
        verifyAllElements.VerifyButton('Add Course')
        verifyAllElements.VerifyButton('Show all')
    })

    it.skip('Verify the breadcrumb link', () => {

    })

    it.skip('Verify the sorting list by Name',() => {

    })

    it.skip('Verify button Show All', () => {

    })

    it.skip('Verify pagination function', ()=> {

    })
})