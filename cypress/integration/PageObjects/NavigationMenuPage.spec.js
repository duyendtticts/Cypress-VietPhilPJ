/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

class NavigationMenu{
    element = {
        menuButton: (menuName) => cy.get('.nav-item').contains(menuName),
    }

    clickEachNavigationMenu(menuOrder){
        cy.xpath('//nav[@class="mt-2"]/ul/li[@class="nav-item"]['+ menuOrder + ']').click;            
    }

    clickMenuButton(menuName) {
        this.element.menuButton(menuName).should('be.visible');
        this.element.menuButton(menuName).click();
    }
}

export default NavigationMenu