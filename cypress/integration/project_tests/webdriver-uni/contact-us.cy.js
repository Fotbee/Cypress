/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
  
  beforeEach(function(){
    cy.fixture('userDetail').as('user')
  })

  it('Should be able to submit a successful submission via Contact Us form', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    cy.title().should('contain', 'WebDriver | Contact Us');
    cy.url().should('contain', 'contactus');
    //cy.get('#contact-us').click()
    cy.get('@user').then((user)=>{
      cy.get('[name="first_name"]').type(user.first_name);
      cy.get('[name="last_name"]').type(user.second_name);
      cy.get('[name="email"]').type(user.email);
      cy.get('textarea.feedback-input').type(user.comment);
    })
    cy.get('[type="submit"]').click();
    cy.get('h1').should('have.text', 'Thank You for your Message!');
    cy.get('#contact_reply').should(
      'have.css',
      'background-color',
      'rgb(56, 75, 218)'
    );
  });

  it('Should not be abel submit a successful submission via Contact Us form as all fields are required', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('@user').then((user)=>{
      cy.get('[name="first_name"]').type(user.first_name);
      cy.get('[name="last_name"]').type(user.second_name);
      cy.get('textarea.feedback-input').type(user.comment);
    })
    cy.get('[type="submit"]').click();
    cy.get('body').contains('Error: all fields are required');
  });

  it('Should be able to submit a successful submission via Contact Us form', () => {
    //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit('https://webdriveruniversity.com');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    cy.title().should('contain', 'WebDriver | Contact Us');
    cy.url().should('contain', 'contactus');
    //cy.get('#contact-us').click()
    cy.get('@user').then((user)=>{
      cy.get('[name="first_name"]').type(user.first_name);
      cy.get('[name="last_name"]').type(user.second_name);
      cy.get('[name="email"]').type(user.email);
      cy.get('textarea.feedback-input').type(user.comment);
    })
    cy.get('[type="submit"]').click();
    cy.get('h1').should('have.text', 'Thank You for your Message!');
    cy.get('#contact_reply').should(
      'have.css',
      'background-color',
      'rgb(56, 75, 218)'
    );
  });
});
