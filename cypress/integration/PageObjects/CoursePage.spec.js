/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />


class CoursePage{
    configColumnElement = {
        showHideButton: () => cy.get('.btn').contains('Show/Hide columns')
    }

    // configColumnSetting = {

    // }

}
export default CoursePage