/// <reference types="cypress" />

import { DatepickerPage } from "../../support/webdriveruni-page-objects/DatepickerPage";

const datepickerPage = new DatepickerPage();
const datepickerPageUrl = 'Datepicker/index.html';

describe('Datepicker Page tests', () => {
    before(() => {
        cy.visit('/' + datepickerPageUrl);
    });

    it('Change the date and check if correct one is set', () => {
        datepickerPage.changeDate('10', 'May', '2020', '05-10-2020');
    });
});