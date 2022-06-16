import HomePage_PO from "../../../support/pageObject/webdriver-uni/HomePage_PO";
/// <reference types="Cypress" />

describe('Test file upload via webdriverUni', () => {
  const homePage_PO = new HomePage_PO();
  beforeEach(()=>{
    homePage_PO.visitHomePage()
    homePage_PO.clickOn_File_Upload_Button()
  })
    it('Upload the file', () => {
      cy.fixture('laptop.png', 'base64').then((fileContent) => {
          cy.get('#myFile').attachFile(
              {
                  fileContent,
                  fileName: 'laptop.png',
                  mimeType: 'image/png'
              },{
                  uploadType: 'input'
              }
          )

      })
      cy.get('#submit-button').click()
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Your file has now been uploaded!')
    })

      })  
    it('Upload no file', () => {
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
          expect(str).to.equal('You need to select a file to upload!')
      })
  
        })  
  });
  