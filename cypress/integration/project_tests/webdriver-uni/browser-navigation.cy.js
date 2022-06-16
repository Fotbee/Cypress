import HomePage_PO from "../../../support/pageObject/webdriver-uni/HomePage_PO";
/// <reference types="Cypress" />

// both test fails because we ipen new domain (security restictions)

describe('Validate webdriveruni homepage links', () => {
  const homePage_PO = new HomePage_PO();
  before(()=>{
    homePage_PO.visitHomePage()
    homePage_PO.clickOn_ContactUs_Button()
  })
  it('Confirm links redirect to corect pages', () => {
    cy.url().should('include', 'contactus');
    cy.go('back');
    cy.reload();

    //cy.reload(true) //reload without cache

    cy.go('forward');
    cy.url().should('include', 'contactus');
    cy.go('back')

    cy.get('#login-portal').invoke('removeAttr', 'target').click({ force: true });
    cy.url().should('contain', 'Login-Portal')
    cy.go('back')
 

    cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true})
    cy.url().should('contain', 'To-Do-List')
    cy.go('back')
    

  });
});
