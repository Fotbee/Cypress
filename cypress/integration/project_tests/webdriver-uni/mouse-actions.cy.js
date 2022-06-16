import HomePage_PO from "../../../support/pageObject/webdriver-uni/HomePage_PO";
/// <reference types="Cypress" />

describe('Test mouse actions', () => {
  const homePage_PO = new HomePage_PO()
    beforeEach(() => {
      homePage_PO.visitHomePage()
      homePage_PO.clickOn_Actions_Button()
      })

    it('It should be able to drag and drop the item', () => {
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true}).then(($el) => {
            expect($el).to.have.css('background-color','rgb(97, 109, 179)')     
        })
      });
    
    it('It should be able to perform double mouse click', () => {
        cy.get('#double-click').dblclick().then(($el)=>{
            expect($el).to.have.css('background-color','rgb(147, 203, 90)')
        })
      });

      it('It should be able to hold down left mouse click button on a given element', () => {
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($el) =>{
            expect($el).to.have.css('background-color','rgb(0, 255, 0)')

        })
      });


     
  
  });
  