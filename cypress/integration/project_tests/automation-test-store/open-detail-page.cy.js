/// <reference types="Cypress" />

describe('The detail page of the product should be shown', () => {


    it('Should be able to open first element in the page', () => {
        cy.visit('https://automationteststore.com/')
        cy.xpath("//a[@class='prdocutname']").eq(0).click().then(function(itemHeaderText){
            console.log('Selected items : ' +itemHeaderText.text())
        })
        cy.xpath("//span[@class='bgnone']").should('have.text','Skinsheen Bronzer Stick')


        

       
    })
})