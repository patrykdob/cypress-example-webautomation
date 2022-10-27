export class HomePage {

    elements ={
        subnav : () => cy.get('.subnav'),
        searchInput : () => cy.get('#filter_keyword'),
        shoppingCart : () => cy.get('.topcart'),
        category : () => cy.get('.contentpanel')
    }

    goToCategory(subnav, option) {
        this.elements.subnav().contains(subnav).click();
        this.elements.category().contains(option).click();
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