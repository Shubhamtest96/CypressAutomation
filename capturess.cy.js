 
 /// <reference types ="Cypress"  />


describe ("capture ss" , ()=> {
    it("taking ss" , ()=> {
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("homepage");
    })
})