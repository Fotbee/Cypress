/// <reference types="Cypress" />

describe('Test Contact Us form via Automation test store', () => {


    it('Should be able to submit a successful submission via Contact Us form', () => {
        cy.visit('https://automationteststore.com/')
        cy.xpath("//a[contains(@href, 'contact')]").click().then(function(linkText){
            console.log('Button text is: '+ linkText.text())

        })
        cy.get('#ContactUsFrm_first_name').type('Heval')
        cy.get('#ContactUsFrm_email').type('test@gmal.com')
        cy.get('#ContactUsFrm_enquiry').type('text')
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log('hello Console')
    })
})
