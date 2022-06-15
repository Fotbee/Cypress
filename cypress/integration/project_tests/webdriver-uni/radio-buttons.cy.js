import HomePage_PO from "../../../support/pageObject/webdriver-uni/HomePage_PO";
/// <reference types="Cypress" />

describe('Varify radio buttons via driverUni', () => {
  const homePage_PO = new HomePage_PO()

  beforeEach(() => {
    homePage_PO.visitHomePage()
    homePage_PO.clickOn_Data_drop_checkbox_radio_Button()
  })

    it('Check specific radio buttons', () => {
      cy.get('#radio-buttons').find('[type="radio"]').as('radio-buttons')
      cy.get('@radio-buttons').first().check()
      cy.get('@radio-buttons').eq(1).check()

    });

    it('Validate the states of specific radio buttons', () => {
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')
        
        cy.get('[value="lettuce"]').check().should('be.checked')
        cy.get('[value="pumpkin"]').should('not.be.checked')

        cy.get('[value="cabbage"]').should('be.disabled')

      });
     
  
  });
  