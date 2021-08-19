/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

class SortFunction {
    elements = {
        nameOfColumn: (nameOfColumn) => cy.get('.text').contains(nameOfColumn),
    }
    getListOfColumn(){
        
    }
    sortAsc(){

    }

    sortDesc(){

    }

}
export default SortFunction