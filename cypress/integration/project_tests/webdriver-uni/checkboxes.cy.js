/// <reference types="Cypress" />

describe('Varify check boxes via driverUni', () => {
  beforeEach(()=>{
    cy.Navigate_webdriverUni_Checkbox_Page()

  })
    it('Check and validate checkbox', () => {
      cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
      cy.get('@option-1').check().should('be.checked')

    });

    it('UnCheck and validate checkbox', () => {
        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
  
      });
    it('Validate multiple checkboxes', () => {
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')

  
      });
     
  
  });
  