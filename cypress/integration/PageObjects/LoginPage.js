/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

class LoginPage
{
    // visit(){
    //     // cy.visit('https://elearning.ieltsmaster.vn/backend/course/')
    //     cy.visit()
    // }

    fillEmail(value) {
        //cy.get('input[id="username"]').type(value)
        const emailField = cy.get('input[id="first-name"]')
        emailField.clear()
        emailField.type(value)
    }

    fillPassword(value){
        const pwField = cy.get('[name=password]')
        pwField.clear()
        pwField.type(value)
    }

    submit(){
        //cy.get('.MuiButton-label').contains('Log in').click()
        const signInButton = cy.xpath('//button[contains(text(),"Sign in")]')
        signInButton.click()
    }

    loginFunction(email, password){
        cy.visit('https://elearning.ieltsmaster.vn')
        this.fillEmail(email)
        this.fillPassword(password)
        this.submit()
    }

}
export default LoginPage