/// <reference types="Cypress" />

describe('Iterate over elements in the li', () => {
    beforeEach(()=>{
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
    })

    it('Log information of all Hair Care elements', () => {
      cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
          cy.log('Index: ' + index + ': ' + $el.text())
      })    
      })

    it('Add specific product to basket', () => {
        cy.selectProduct('Seaweed Conditioner')  // custom command     
          })
          
    it('Add specific product to basket', () => {
        cy.selectProduct('Seaweed Conditioner')  // custom command
               
          })
      
    })