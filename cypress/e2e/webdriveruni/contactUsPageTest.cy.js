/// <reference types="cypress" />

import { ContactUsPage } from "../../support/page-objects/ContactUsPage";

const contactUsPage = new ContactUsPage();
const contactUsUrl = 'Contact-Us/contactus.html';

describe('Contact Us Page tests', () => {

    beforeEach(() => {
        cy.visit('/' + contactUsUrl);
    });

    it('Fill all fields, reset and check if fields are empty', () => {
        contactUsPage.enterFirstName('John');
        contactUsPage.enterLastName('Doe');
        contactUsPage.enterEmailAddress('test@test.com');
        contactUsPage.enterComments('Some Comments');
        contactUsPage.clickResetButton();

        contactUsPage.checkIfInputsAreEmpty();
    });

    it('Fill some fields, try to sumbit and check for error message', () => {
        contactUsPage.enterFirstName('John');
        contactUsPage.enterLastName('Doe');
        contactUsPage.enterEmailAddress('test@test.com');

        contactUsPage.clickSubmitButton();

        cy.contains('Error: all fields are required');
    });

    it('Enter invalid email, try to sumbit and check for error message', () => {
        contactUsPage.enterFirstName('John');
        contactUsPage.enterLastName('Doe');
        contactUsPage.enterEmailAddress('invalidmail.com');
        contactUsPage.enterComments('Some Comments');

        contactUsPage.clickSubmitButton();

        cy.contains('Error: Invalid email address');
    });

    it('Fill all fields, submit and check for confirmation message', () => {
        contactUsPage.enterFirstName('John');
        contactUsPage.enterLastName('Doe');
        contactUsPage.enterEmailAddress('test@test.com');
        contactUsPage.enterComments('Some Comments');

        contactUsPage.clickSubmitButton()

        cy.get('#contact_reply').should('be.visible');
    });

});