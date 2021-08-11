/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />
import CommonFunction  from "./CommonFunction.spec"

class CommonPage{
    errorMesssage = {
        elementNotFound: () => cy.log('Element Not Found on the page'),
    }
    element = {
        menuButton: (menuName) => cy.get('.nav-item').contains(menuName),
    }

    clickMenuIcon(menuName) {
        this.element.menuButton(menuName).should('be.visible');
        this.element.menuButton(menuName).click();
    }

    clickEachMenuButton(orderOfMenu){
        // cy.get(menuButton).click()
        cy.xpath('//ul[@role="menu"]/li[@class="nav-item"][' + orderOfMenu + ']').click();
        }
    checkTextHeaderShouldNotEqual(expectedText){
        var expectedText
        cy.get('h1').should(($div) => {
            const headerText = $div.text()         
            // expect(text).to.match(/foo/)
            // expect(text).to.include('foo')
            assert.notEqual(headerText, expectedText, 'header Text of Page is: ' + headerText)
          })
    }

    checkTextHeaderShouldEqual(expectedText){
        var expectedText
        cy.get('h1').should(($div) => {
            const headerText = $div.text()         
            // expect(text).to.match(/foo/)
            // expect(text).to.include('foo')
            assert.Equal(headerText, expectedText, 'header Text of Page is: ' + headerText)
          })
    }

}

export default CommonPage