export class ShopItemPage {

    elements ={
        itemName : () => cy.get('.prdocutname'),
        sizeRadioButton : () => cy.get('.input-group'),
        addItemToCartButton : () => cy.get('.fa-cart-plus'),
    }

    chooseItem(itemName) {
        this.elements.itemName().contains(itemName).click();
    }

    chooseSize() {
        this.elements.sizeRadioButton().find('#option344747').check();
    }

    addItemToCart() {
        this.elements.addItemToCartButton().click();
    }
}
export default new ShopItemPage()