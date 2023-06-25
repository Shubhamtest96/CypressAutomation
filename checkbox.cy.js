/// <reference types ="Cypress"  />

describe("chekcbox UI elements"  ,  ()=> {
    it ("checkbox handle" , ()=> {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");

        // visibility check
        cy.get ("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //select radiobuttions

    //     cy.get("input#male").check().should('be.checked')
    //   //  cy.get("input#female").should('not.be.checked')

    //     cy.get("input#male").uncheck().should('not.be.checked')


    // checking and unchecking checkbox 
    // cy.get("input#monday").check().should('be.checked')
    // cy.get("input#monday").uncheck().should('not.be.checked')


    //select all the chekbox at a time 
cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

    })
})


