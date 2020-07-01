/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe()
  })

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })

  it("Focuses on the footer link and asserts its attributes", () => {
    cy.findAllByText("yourmail@yourmailprovider.com").focus()
    cy.focused()
      .should("have.text", "yourmail@yourmailprovider.com")
      .should("have.attr", "href", "mailto:yourmail@yourmailprovider.com")
      .should("not.have.css", "outline-width", "0px")
  })
})
