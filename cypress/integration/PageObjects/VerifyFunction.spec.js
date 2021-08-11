/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

class VerifyFunctions{
    VerifyBreadCrumbLink(textOfBreadCrumbLink){
        cy.get('.breadcrumb-item').contains(textOfBreadCrumbLink).should('be.visible');
    }

    VerifyButton(buttonName){
        //get class of button contains valid name 
        cy.get('.btn').contains(buttonName).should('be.visible'); 
    }

    VerifyTextInputField(idOfTextField){
        cy.get(idOfTextField).should('be.visible')
    }
    VerifyDropDownBox(nameOfDropdownList){
        cy.get('.select2-selection__rendered').contains(nameOfDropdownList).click();
        cy.get('.select2-results__option').contains(nameOfDropdownList).should('be.visible'); // verify dropdown list visible

    }

}
export default VerifyFunctions