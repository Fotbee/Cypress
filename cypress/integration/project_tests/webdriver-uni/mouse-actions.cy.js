/// <reference types="Cypress" />

describe('Test mouse actions', () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
      })

    it('It should be able to drag and drop the item', () => {
        // cy.visit('https://webdriveruniversity.com');
        // cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true}).then(($el) => {
            expect($el).to.have.css('background-color','rgb(97, 109, 179)')     
        })
      });
    
    it('It should be able to perform double mouse click', () => {
        // cy.visit('https://webdriveruniversity.com');
        // cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.get('#double-click').dblclick().then(($el)=>{
            expect($el).to.have.css('background-color','rgb(147, 203, 90)')
        })
      });

      it('It should be able to hold down left mouse click button on a given element', () => {
    //     cy.visit('https://webdriveruniversity.com');
    //     cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($el) =>{
            expect($el).to.have.css('background-color','rgb(0, 255, 0)')

        })
      });


     
  
  });
  