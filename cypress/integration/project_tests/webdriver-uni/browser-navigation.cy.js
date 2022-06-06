/// <reference types="Cypress" />

// both test fails because we ipen new domain (security restictions)

describe('Validate webdriveruni homepage links', () => {
  it('Confirm links redirect to corect pages', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

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
