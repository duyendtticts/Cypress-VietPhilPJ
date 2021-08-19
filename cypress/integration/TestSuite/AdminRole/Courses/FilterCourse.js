/// <reference types = "Cypress"/>
/// <reference types="cypress-xpath" />


import LoginPage from '../../../PageObjects/LoginPage'
import NavigationMenu from '../../../PageObjects/NavigationMenuPage.spec'
import CoursePage from '../../../PageObjects/CoursePage.spec'
import CheckFunctions from '../../../PageObjects/CheckFunctions.spec'

describe('Filtering courses function', () => {
    beforeEach( () => {
        let menuName = 'Courses'
        const clickMenu = new NavigationMenu() // initial the navigation menu class
        //go to elearning site and login successfully
        const loginCase = new LoginPage()
        loginCase.loginFunction("administrator", "qwepoi123")
        //go to Course Page via clicking Course menu
        cy.wait(500)
        clickMenu.clickMenuButton(menuName)   
    })

    it.skip('Filter with random teacher on the list ', ()=>{
        const filterByTeacher = new CoursePage()
        var numberOfTeacher = 3
        cy.wait(500)

        filterByTeacher.filterByDropdownList('teacher', numberOfTeacher)      
        cy.get('[data-name="teacher"]')
            .find('option').eq(numberOfTeacher)
            .then(($text) => {
                //get the teacher Name that selected 
                var teacherName = $text.text().trim() // use trim to cut off all unnecessary space of text
                //check each teacher Name on result table 
                cy.get('table[id="result_list"]')
                    .find('td.field-teacher')
                    .should(($td) => {
                        //get the total of items on result table
                        const totalAmount = $td.length
                        console.log(totalAmount)
                        // check the last selected item has the same value as selected teacher
                        expect($td.last()).to.contain(teacherName)
                        //check each item on the result table should has teacher name as selected item
                        for (var i = 0; i<= totalAmount;i++) {
                            expect($td.eq(i)).to.contain(teacherName)
                        }    
                    })
                
            })
        
    })
    it('Filter with teacher', () => {
        const filterByTeacher = new CoursePage()
        var numberOfSelection = 4
        var classOftd = 'field-teacher'
        var nameOfDropdownList = 'teacher'
        cy.wait(500)
        //filtering with option 4 on the list of dropdown box
        filterByTeacher.filterByDropdownList(nameOfDropdownList, numberOfSelection)
        //check the result if all teacher on result list is matched with selection or not
        const checkResult = new CheckFunctions()
        checkResult.CheckResultOfFilterWithDropdownList(nameOfDropdownList, numberOfSelection, classOftd) 
          //text label of list, number of selection, class td of this cell on the result table
    })

    it('Filter with student', () => {
        const filterByStudent = new CoursePage()
        var numberOfSelection = 4
        var classOftd = 'field-num_student'
        var nameOfDropdownList = 'student'
        cy.wait(500)

        filterByStudent.filterByDropdownList(nameOfDropdownList, numberOfSelection)
        
        const checkResult = new CheckFunctions()
        checkResult.CheckResultOfFilterWithDropdownList(nameOfDropdownList, numberOfSelection, classOftd)
    })
})