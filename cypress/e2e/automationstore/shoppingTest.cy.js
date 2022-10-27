/// <reference types="cypress" />

import { CheckoutPage } from "../../support/automationstore-page-objects/CheckoutPage";
import { HomePage } from "../../support/automationstore-page-objects/HomePage";
import { ShopItemPage } from "../../support/automationstore-page-objects/ShopItemPage";

const homePage = new HomePage();
const shopItemPage = new ShopItemPage();
const checkoutPage = new CheckoutPage();
const automationStoreUrl = Cypress.config().automationStore;

describe('Shopping Tests', () => {

    const mainAddressErrorMessage = 'Address 1 must be greater than 3 and less than 128 characters!';
    const cityErrorMessage = 'City must be greater than 3 and less than 128 characters!';
    const zipCodeErrorMessage = 'Zip/postal code must be between 3 and 10 characters!';
    const regionErrorMessage = 'Please select a region / state!';

    beforeEach(() => {
        cy.visit(automationStoreUrl);
    });

    it('Add items using the search and manually, finalise the order and check if it was successful', () => {
        homePage.goToCategory('Apparel & accessories', 'Shoes');

        shopItemPage.chooseItem('Flip Flop');
        shopItemPage.chooseSize();
        shopItemPage.addItemToCart();

        homePage.goToCategory('Apparel & accessories', 'T-shirts');

        shopItemPage.chooseItem('Baseball')
        shopItemPage.addItemToCart();

        homePage.searchForItem('dove');
        shopItemPage.addItemToCart();

        checkoutPage.checkoutAsGuest();
        checkoutPage.clickContinue();
        checkoutPage.typeCustomerInfo('Tester', 'Testowy', 'tester@testowy.com');
        checkoutPage.typeCustomerAddress('Testerska 1', 'Testowo', 'Pomorskie', '12-345', 'Poland');
        checkoutPage.clickContinue();
        checkoutPage.clickConfirmOrder();

        cy.contains(' Your Order Has Been Processed!')

    });

    it.only('Add item to cart, checkout and check validation for address', () => {
        homePage.searchForItem('dove');
        shopItemPage.addItemToCart();

        // try to continue with empty address
        checkoutPage.checkoutAsGuest();
        checkoutPage.clickContinue();
        checkoutPage.typeCustomerInfo('Tester', 'Testowy', 'tester@testowy.com');
        checkoutPage.clickContinue();

        checkoutPage.checkPresenceOfValidationError(0, mainAddressErrorMessage);
        checkoutPage.checkPresenceOfValidationError(1, cityErrorMessage);
        checkoutPage.checkPresenceOfValidationError(2, regionErrorMessage);
        checkoutPage.checkPresenceOfValidationError(3, zipCodeErrorMessage);

        // try to continue with not enough characters for inputs
        checkoutPage.typeCustomerAddress('Te', 'St', 'Pomorskie', 'Er', 'Poland');
        checkoutPage.clickContinue();

        checkoutPage.checkPresenceOfValidationError(0, mainAddressErrorMessage);
        checkoutPage.checkPresenceOfValidationError(1, cityErrorMessage);
        checkoutPage.checkPresenceOfValidationError(2, zipCodeErrorMessage);

        // try to continue with too much characters for input
        var tooLongInput = 'loremipsumdolores';
        var iterations = 2;
        for (var i = 0; i < iterations; i++) {
            tooLongInput += tooLongInput + tooLongInput
        }
        checkoutPage.typeMainAddress(tooLongInput);
        checkoutPage.typeCity(tooLongInput);
        checkoutPage.typeZipCode(tooLongInput);
        checkoutPage.clickContinue();

        checkoutPage.checkPresenceOfValidationError(0, mainAddressErrorMessage);
        checkoutPage.checkPresenceOfValidationError(1, cityErrorMessage);
        checkoutPage.checkPresenceOfValidationError(2, zipCodeErrorMessage);

    });

    it('Add item to cart twice, check if quantity and price changed in cart', () => {
        homePage.searchForItem('dove');
        shopItemPage.addItemToCart();

        homePage.itemQuantityShouldEqual('1');
        homePage.itemPriceShouldEqual('$6.70');

        homePage.searchForItem('dove');
        shopItemPage.addItemToCart();

        homePage.itemQuantityShouldEqual('2');
        homePage.itemPriceShouldEqual('$13.40');

    });
});