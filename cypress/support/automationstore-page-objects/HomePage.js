export class HomePage {

    elements ={
        subnav : () => cy.get('.subnav'),
        searchInput : () => cy.get('#filter_keyword'),
        shoppingCart : () => cy.get('.topcart')
    }

    goToApparelAndAccessories() {
        this.elements.subnav().contains('Apparel & accessories').click();
    }

    chooseCategory(option) {
        cy.get('.contentpanel').contains(option).click();
    }

    searchForItem(itemName) {
        this.elements.searchInput().type(itemName).type('{enter}');
    }

    itemQuantityShouldEqual(quantity) {
        this.elements.shoppingCart().find('.label-orange').should('have.text', quantity);
    }

    itemPriceShouldEqual(price) {
        this.elements.shoppingCart().find('.cart_total').should('have.text', price);
    }
}
export default new HomePage()