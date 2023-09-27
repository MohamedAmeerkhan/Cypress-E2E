export class addToCart{
    weblocatorsCart = { 
           searchEnginer: 'input[name="search"]',
           searchClick :'.btn.btn-default.btn-lg',
           product : 'img[title="MacBook"]',
           addToCart : '.button-group>button',
           successMessage : '.alert.alert-success.alert-dismissible'
           
    }

    typeSearch(productname)
    {
        cy.get(this.weblocatorsCart.searchEnginer).type(productname)
        cy.get(this.weblocatorsCart.searchClick).click()
    }
    addToCarts()
    {
        cy.get(this.weblocatorsCart.addToCart).first().click()
    }
    orderAddedCart()
    {
       return cy.get(this.weblocatorsCart.successMessage)
    }

}