class HomePage_PO{
    visitHomePage(){
        cy.visit(Cypress.env('webdriveruni_homepage'))
    }

    clickOn_ContactUs_Button(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    }

    clickOn_Data_Tables_Button(){
        cy.get('#data-table').invoke('removeAttr', 'target').click({force: true})
    }
    
    clickOn_Data_drop_checkbox_radio_Button(){
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
    }

    clickOn_File_Upload_Button(){
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true})
    }

    clickOn_Iframe_Button(){
        cy.get('#iframe').invoke('removeAttr', 'target').click({force: true})
    }

    clickOn_PopupAlerts_Button(){
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
    }

    clickOn_Actions_Button(){
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
    }

    clickOn_AutoComplete_Textfield_Button(){
        cy.get('#autocomplete-textfield').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
    }



}

export default HomePage_PO