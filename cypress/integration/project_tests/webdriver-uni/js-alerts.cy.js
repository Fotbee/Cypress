import HomePage_PO from "../../../support/pageObject/webdriver-uni/HomePage_PO";
/// <reference types="Cypress" />

describe('Handle JS alerts', () => {
    const homePage_PO = new HomePage_PO()
    beforeEach(()=>{
        homePage_PO.visitHomePage()
        homePage_PO.clickOn_PopupAlerts_Button()
    })
    it('Confirm JS alert contains the correct text', () => {
      cy.get('#button1').click()
      cy.on('window:alert', (str) => {
          expect(str).to.equal('I am an alert box!')
      })
    
  });

  it('Validate JS comnfirm alert box works correctly when clicking ok', () => {
    cy.get('#button4').click()

    cy.on('window:confirm', (str) => {
        return true;
    })
    cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
  
});

it('Validate JS comnfirm alert box works correctly when clicking cancel', () => {
    cy.get('#button4').click()

    cy.on('window:confirm', (str) => {
        return false
    })
    cy.get('#confirm-alert-text').contains('You pressed Cancel!')
  
});

it('Validate JS comnfirm alert box works correctly using a stub', () => {
    const stub = cy.stub()
    cy.on('window:confirm', stub)

    cy.get('#button4').click().then(()=>{
        expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(()=>{
        return true
    }).then(()=>{
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

});


})
  