import HomePage_PO from "../../../support/pageObject/webdriver-uni/HomePage_PO";
/// <reference types="Cypress" />

describe('Interact with dropdown lists via driverUni', () => {
  const homePage_PO = new HomePage_PO();
    it('Select specific values via select dropdown list', () => {
      homePage_PO.visitHomePage()
      homePage_PO.clickOn_Data_drop_checkbox_radio_Button()
      cy.get('#dropdowm-menu-1').select('c#')
      cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng') // select by VALUE
      cy.get('#dropdowm-menu-3').select('CSS').contains('CSS') // select by TEXT

      cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven') // select by VALUE
      cy.get('#dropdowm-menu-2').select('Maven').contains('Maven')// select by TEXT
      


    });

     
  
  });
  