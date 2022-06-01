/// <reference types="Cypress" />

describe('Iterate over elements in the li', () => {


    it('Log information of all Hair Care elements', () => {

    cy.visit('https://automationteststore.com/')

      cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
      cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
          cy.log('Index: ' + index + ': ' + $el.text())
      })    
      })



    it('Add specific product to basket', () => {

    cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Seaweed Conditioner')) {
                cy.wrap($el).click()
            }
        
        })    
       
          })
      
    })