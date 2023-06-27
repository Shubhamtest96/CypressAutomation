/// <reference types ="Cypress"  />

describe("alert" , ()=> {

    it ("alert testing" , ()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
   cy.get("[onclick = 'jsAlert()']").click();

   cy.on('window:alert' , (t)=> {
    expect(t).to.contains('I am a JS Alert');          

   })

    })
})



  