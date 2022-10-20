export class CheckoutPage {

    elements ={

        checkoutButton : () => cy.get('#cart_checkout1'),
        guestCheckoutRadio : () => cy.get('#accountFrm_accountguest'),
        continueButton : () => cy.get('[title="Continue"]'),
        firstNameInput : () => cy.get('#guestFrm_firstname'),
        lastNameInput : () => cy.get('#guestFrm_lastname'),
        emailInput : () => cy.get('#guestFrm_email'),
        mainAddressInput : () => cy.get('#guestFrm_address_1'),
        cityInput : () => cy.get('#guestFrm_city'),
        regionDropdown : () => cy.get('#guestFrm_zone_id'),
        zipCodeInput : () => cy.get('#guestFrm_postcode'),
        countryDropdown : () => cy.get('#guestFrm_country_id'),
        confirmOrderButton : () => cy.get('#checkout_btn'),
        validationErrorInput: () => cy.get('.has-error')

    }

    clickContinue() {
        this.elements.continueButton().click();
    }

    checkoutAsGuest() {
        this.elements.checkoutButton().click();
        this.elements.guestCheckoutRadio().check();
    }

    typeFirstName(firstName) {
        this.elements.firstNameInput().type(firstName);
    }

    typeLastName(lastName) {
        this.elements.lastNameInput().type(lastName);
    }

    typeEmail(email) {
        this.elements.emailInput().type(email);
    }

    typeMainAddress(address) {
        this.elements.mainAddressInput().type(address);
    }

    typeCity(cityName) {
        this.elements.cityInput().type(cityName);
    }

    chooseRegion(region) {
        this.elements.regionDropdown().select(region);
    }

    typeZipCode(zipCode) {
        this.elements.zipCodeInput().type(zipCode);
    }

    chooseCountry(country) {
        this.elements.countryDropdown().select(country);
    }

    clickConfirmOrder() {
        this.elements.confirmOrderButton().click();
    }

    checkPresenceOfValidationError(inputNo, errorMessage) {
        this.elements.validationErrorInput().eq(inputNo).find('.help-block').should('have.text', errorMessage);
    }
}
export default new CheckoutPage()