/// <reference types="Cypress" />

describe('Inspect Automation test store items using chain of commands', () => {
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Click on the first item using item title', () => {

        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    })

    it('Click on the first item using idex', () => {
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })

    it('Click on the first item using item title + then command', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log('Selected the following item: ' + itemHeaderText.text())
        })
    })
})
