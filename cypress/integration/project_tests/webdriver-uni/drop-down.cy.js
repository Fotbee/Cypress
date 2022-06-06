/// <reference types="Cypress" />

describe('Interact with dropdown lists via driverUni', () => {
    it('Select specific values via select dropdown list', () => {
      cy.visit('https://webdriveruniversity.com');
      cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
      cy.get('#dropdowm-menu-1').select('c#')
      cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng') // select by VALUE
      cy.get('#dropdowm-menu-3').select('CSS').contains('CSS') // select by TEXT


      cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven') // select by VALUE
      cy.get('#dropdowm-menu-2').select('Maven').contains('Maven')// select by TEXT
      


    });

     
  
  });
  