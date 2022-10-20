/// <reference types="cypress" />

import { AjaxLoaderPage } from "../../support/webdriveruni-page-objects/AjaxLoaderPage";

const ajaxLoaderPage = new AjaxLoaderPage();
const ajaxLoaderPageUrl = 'Ajax-Loader/index.html';

Cypress.on('uncaught:exception', () => {
    // returning false here prevents Cypress from failing the test
    return false
  })

describe('Ajax Loader Page tests', () => {

    before(() => {
        cy.visit('/' + ajaxLoaderPageUrl);
    });

    it('Wait for page to load and click the button', () => {
        ajaxLoaderPage.waitForLoaderToBeHidden();
        ajaxLoaderPage.clickButton();
    });
});