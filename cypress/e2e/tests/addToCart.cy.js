import { addToCart } from '../../pageObjects/addToCart'
const addToCartObj = new addToCart()
import products from '../../fixtures/products.json'


describe(' test automation', () => {
    before(() => {
        cy.login(products.login.username, products.login.password)
    })


    it('Add To Cart flow', () => {
        addToCartObj.typeSearch(products.product.productName)
        addToCartObj.addToCarts()
        addToCartObj.orderAddedCart().should('contain', products.message.successMessage).and('contain', products.product.productName);






    })
})