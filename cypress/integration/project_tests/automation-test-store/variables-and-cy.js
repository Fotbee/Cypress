/// <reference types="Cypress" />

describe('Verifying variables,cypress commands and jquery commands', () => {


    it('Opening the specific product pages', () => {

    cy.visit('https://automationteststore.com/')

      cy.get("a[href*='product/category&path=']").contains('Makeup').click()
      cy.get('h1 .maintext').then(($headerText) => {
          const headerText = $headerText.text()
          cy.log(headerText)
          expect(headerText).is.eq('Makeup')

      })
      
    })

    it.only('Validate the properties of the contact us page', () => {

        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        // Uses cypress commands and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain', 'First name:')


        //Using JQuery Approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(text =>{
          const firstNameText = text.find('#field_11').text()
          expect(firstNameText).to.contain('First name:')
        })


        //Embedded commands(Closure)
        cy.get('#field_11').then(fnText => {
          cy.log(fnText.text())
          cy.log(fnText)
        })

})
})