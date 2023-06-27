

/// <reference types ="Cypress"  />

describe ("locatos testing"  , ()=> {
  it ("locators" , ()=> {
   cy.visit("https://google.com")

   //classname 
//    cy.get ('.gLFyf').type("utomation testing")

   // using attribute
   cy.get('[name=q]').type("automation testing step by step")
  })
})

describe ("Id locators"  , ()=>{
    it('id locator testing' , ()=> {
        cy.visit("https://demo.guru99.com/test/newtours/register.php")
  // using Id locator
        cy.get('#userName').type("shubhamnode96@gmail.com")
    })
})