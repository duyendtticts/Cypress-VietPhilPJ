/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />

class CheckFunctions{
    CheckResultOfFilterWithDropdownList(nameOfList,numberOfSelection,classOftd ){
        cy.get('[data-name="' + nameOfList + '"]')
            .find('option').eq(numberOfSelection)
            .then(($text) => {
                //get the teacher Name that selected 
                var selectionText = $text.text().trim() // use trim to cut off all unnecessary space of text
                //check each teacher Name on result table 
                cy.get('table[id="result_list"]')
                    .find('td.' + classOftd)
                    .should(($td) => {
                        //get the total of items on result table
                        const totalAmount = $td.length
                        console.log(totalAmount)
                        // check the last selected item has the same value as selected teacher
                        expect($td.last()).to.contain(selectionText)
                        //check each item on the result table should has teacher name as selected item
                        for (var i = 0; i<= totalAmount;i++) {
                            expect($td.eq(i)).to.contain(selectionText)
                        }    
                    })
                
            })
    }
}
export default CheckFunctions