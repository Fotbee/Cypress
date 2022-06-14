class Autostore_Haircare_PO {
    add_HairCare_Product_To_Basket(){
        globalThis.data.productName.forEach((element) => {
            cy.add_Product_To_Basket(element)
        })
        cy.get('.dropdown-toggle > .fa').click()

    }

}

export default Autostore_Haircare_PO