/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />


class CoursePage{
    configColumnElement = {
        showHideButton: () => cy.get('.btn').contains('Show/Hide columns'),
    }
    elements = {
        dropdownBox: (nameOfBox) => cy.get('.select2-selection__rendered').contains(nameOfBox),
        startDate: () => cy.get('#id_start_date'),
        endDate: () => cy.get('#id_end_date'),
        searchBox: () => cy.get('#searchbar'),
        searchButton: () => cy.get('.btn').contains('Search'),
        dropdownListOption: (optionNo) => cy.get('ul li'),
    }

   filterByDropdownList(nameOfDropdownList, itemNo){
        this.elements.dropdownBox(nameOfDropdownList).click();
        cy.wait(500)
        var selectedItem = cy.get('ul.select2-results__options>li').eq(itemNo);
        cy.get('ul.select2-results__options>li').eq(itemNo).click();  //select the item No on the list that has class as select2-results__options

   }

}
export default CoursePage