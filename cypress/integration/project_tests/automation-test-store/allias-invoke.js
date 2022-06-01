/// <reference types="Cypress" />

describe('A;oas amd ivoke', () => {


    it('Validate a specific hair care product', () => {

    cy.visit('https://automationteststore.com/')

      cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

      cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
      cy.get('@productThumbnail').its('length').should('be.gt', 5)
      cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    

      })

      it('Count the amount of thumbnails on the home page', () => {

        cy.visit('https://automationteststore.com/')
        cy.xpath("//div[@class='thumbnail']").as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    
          })
      

          it.only('Calculate total of normal and sell product', () => {
    
            cy.visit('https://automationteststore.com/')
            cy.get('.thumbnail').as('productThumbnail')

            cy.get('.thumbnail').find('.oneprice').invoke('text').as('fullPrice')
            cy.get('.thumbnail').find('.pricenew').invoke('text').as('salePrice')

            let itemsTotal = 0

            cy.get('@fullPrice').then($linkText => {
              let itemsPriceTotal = 0
              let itemPrice = $linkText.split('$')
              let i
              for(i=0; i< itemPrice.length; i++){
                itemsPriceTotal += Number(itemPrice[i])
              }
              itemsTotal += itemsPriceTotal
              cy.log('Non-sale price total: ' + itemsPriceTotal)


              cy.get('@salePrice').then($linkText => {
                let allSaleItemsPrice = 0
                let saleItemPrice = $linkText.split('$')
                let i
                for(i=0; i< saleItemPrice.length; i++){
                  allSaleItemsPrice += Number(saleItemPrice[i])
                }
                itemsTotal += allSaleItemsPrice
                cy.log('Sale price total: ' + allSaleItemsPrice)
                cy.log('All item cost is ' + itemsTotal)
            })

              })

      
    })

  })
