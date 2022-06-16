import Autostore_HomePage_PO from "../../../support/pageObject/automation-test-store/Autostore_HomePage_PO";
import Autostore_Haircare_PO from "../../../support/pageObject/automation-test-store/Autostore_Haircare_PO";
/// <reference types="Cypress" />

describe("Add multiple items to the basket", () => {
  const autostore_HomePage_PO = new Autostore_HomePage_PO()
  const autostore_HairCare_PO = new Autostore_Haircare_PO()

  before(() => {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    autostore_HomePage_PO.accessHomePage()
    autostore_HomePage_PO.clickOn_HairCare_link()
  });

  it("Add specific items to basket", () => {
    autostore_HairCare_PO.add_HairCare_Product_To_Basket()
  })
});
