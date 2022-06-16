import HomePage_PO from "../../../support/pageObject/webdriver-uni/HomePage_PO";
/// <reference types="Cypress" />

describe('Handling data via webdriverUni', () => {

  const homePage_PO = new HomePage_PO();
    beforeEach(() => {
      homePage_PO.visitHomePage()
      homePage_PO.clickOn_Data_Tables_Button()
    })
  
      it('Calculate and assert total age of all users', () => {
          let userDetail = []
          let numb = 0
          cy.get('#thumbnail-1 td').each(($el,index,$list) => {
              userDetail[index] =$el.text()

          }).then(()=>{
              let i
              for(i =0; i < userDetail.length; i++ ) {
                  //cy.log(userDetail[i])
                  if(Number(userDetail[i])){
                    numb += Number(userDetail[i])
                  }
              }
              cy.log('Found total age' + numb)
              expect(numb).to.eq(322)
          })
      });

      it('Calculate and assert a given user based on last name', () => {
          cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el,index,$list) => {
              const text =$el.text()
              if(text.includes('Woods')){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age)=>{
                    const userAge = age.text()
                    expect(userAge).to.equal('80')

                })

              }
          })

    });
    });
    