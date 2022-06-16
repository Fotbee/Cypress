class Autostore_HomePage_PO {
    accessHomePage() {
        cy.visit('https://automationteststore.com/')
    }

    clickOn_HairCare_link(){
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}

export default Autostore_HomePage_PO