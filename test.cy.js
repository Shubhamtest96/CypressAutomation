/// <reference types = "cypress" />

it("google test " , function() {
    cy.visit("https://google.com")
    cy.get('#APjFqb').type("Testing {enter}");
})