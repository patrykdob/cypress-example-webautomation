/// <reference types="cypress" />

import { AutocompletePage } from "../../support/webdriveruni-page-objects/AutocompletePage";

const autocompletePage = new AutocompletePage();
const autocompletePageUrl = 'Autocomplete-TextField/autocomplete-textfield.html';

describe('Autocomplete TextField Page tests', () => {

    before(() => {
        cy.visit('/' + autocompletePageUrl);
    });

    it('Enter first 3 characters and choose 2 items from list', () => {
        autocompletePage.typeItemInput('alm');
        autocompletePage.chooseItemFromAutocompleteList('Almond');
        autocompletePage.clickSubmitItem();

        autocompletePage.typeItemInput('coo');
        autocompletePage.chooseItemFromAutocompleteList('Cookies');
        autocompletePage.clickSubmitItem();
    });
});