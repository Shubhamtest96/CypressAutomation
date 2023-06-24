
describe ( "dropdown"  ,()=> {
    it ("single and multiple dropdown" , ()=> {
 
       cy.visit("https://www.zoho.com/commerce/free-demo.html");
       console.log("Succefull web page is running ..... ");

       cy.get('#zcf_address_country')
       .select('Italy').should('have.value' , 'Italy')

       cy.get ('#zcf_users')
       .select('Selling offline').should('have.value' , 'Selling offline'); 

      
      
    })
})
