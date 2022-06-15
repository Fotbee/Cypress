/// <reference types="Cypress" />

describe('Inspect Automation test store items using chain of commands', () => {
    beforeEach(()=>{
        cy.visit(Cypress.env('auto_test_store_homepage'))
    })

    it('Click on the first item using item title', () => {

        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    })

    it('Click on the first item using idex', () => {
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })

    it('Click on the first item using item title + then command', () => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log('Selected the following item: ' + itemHeaderText.text())
        })
    })
})
