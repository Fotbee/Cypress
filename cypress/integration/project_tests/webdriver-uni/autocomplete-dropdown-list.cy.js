/// <reference types="Cypress" />

describe('Verify autocomplete dropdown list via driverUni', () => {
    it('Select specific product via autocomplete list', () => {
      cy.visit('https://webdriveruniversity.com');
      cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force: true})

      cy.get('#myInput').type('A')
      cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
          const prod = $el.text()
          const productToSelect = 'Avacado'
          if(prod === productToSelect){
              //$el.click() - old command
              $el.trigger('click') // new comand
              cy.get('#submit-button').click()
              cy.url().should('include', 'Avacado')
          }
      }).then(() =>{
        cy.get('#myInput').type('B')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const productToSelect = 'Bacon'
            if(prod === productToSelect){
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include', 'Bacon')
            }
        })

      })
    })

     
  
  });
  