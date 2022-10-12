/// <reference types="cypress" />

import { DropDownCheckboxesButtonsPage } from "../../support/page-objects/DropdownCheckboxesRadioButtonsPage";

const dropDownBoxesButtonsPage = new DropDownCheckboxesButtonsPage();
const dropdownBoxesButtonsUrl = 'Dropdown-Checkboxes-RadioButtons/index.html';

describe('Dropdown Menu(s), Checkboxe(s) & Radio Button(s) Page tests', () => {

    beforeEach(() => {
        cy.visit('/' + dropdownBoxesButtonsUrl);
    });

    it('Check all boxes, uncheck 2 & 4, confirm which are checked and unchecked', () => {
        for (let checkboxOption = 1; checkboxOption < 5; checkboxOption++) {
            dropDownBoxesButtonsPage.checkCheckbox(checkboxOption);
            dropDownBoxesButtonsPage.ifBoxChecked(checkboxOption);
        }

        dropDownBoxesButtonsPage.uncheckCheckBox(2);
        dropDownBoxesButtonsPage.uncheckCheckBox(4);

        dropDownBoxesButtonsPage.ifBoxNotChecked(2);
        dropDownBoxesButtonsPage.ifBoxNotChecked(4);

        dropDownBoxesButtonsPage.ifBoxChecked(1);
        dropDownBoxesButtonsPage.ifBoxChecked(3);
    });

    it('Click all Radio Buttons and check each if value is correct', () => {
        let radiobuttons = ['green', 'blue', 'yellow', 'orange', 'purple'];
        for (const radiobutton of radiobuttons) {
            dropDownBoxesButtonsPage.checkRadioButton(radiobutton);
            dropDownBoxesButtonsPage.ifRadioButtonChecked(radiobutton);
        }
        
    });
});