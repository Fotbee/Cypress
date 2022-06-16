import HomePage_PO from "../../../support/pageObject/webdriver-uni/HomePage_PO";
/// <reference types="Cypress" />

describe('Handling iFrames and modules', () => {
  const homePage_PO = new HomePage_PO()
  before(()=>{
    homePage_PO.visitHomePage()
    homePage_PO.clickOn_Iframe_Button()
  })
    it('Handle webdriverUni iFrame and module', () => {
      cy.get('#frame').then( $iframe => {
        const body = $iframe.contents().find('body')
        cy.wrap(body).as('iframe')

      })

      cy.get('@iframe').find('#button-find-out-more').click()
      cy.get('@iframe').find('#myModal').as('modal')
      cy.get('@modal').should(($expectedText) => {
          const text = $expectedText.text()
          expect(text).to.include('Welcome to webdriveruniversity.com')
      })
      cy.get('@modal').contains('Close').click()
      

    });
     
  
  });
  