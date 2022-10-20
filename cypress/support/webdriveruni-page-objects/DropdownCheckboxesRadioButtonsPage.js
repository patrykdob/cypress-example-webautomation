export class DropDownCheckboxesButtonsPage {
    dropDownMenuNo = 0;
    elements ={

        dropdownMenus : () => cy.get(`#dropdowm-menu-${this.dropDownMenuNo}`),
        checkbox : () => cy.get('#checkboxes'),
        radioButton : () => cy.get('#radio-buttons'),

    }

    checkCheckbox(checkBoxNo) {
        this.elements.checkbox().find(`input[value="option-${checkBoxNo}"]`).check();
    }

    uncheckCheckBox(checkBoxNo) {
        this.elements.checkbox().find(`input[value="option-${checkBoxNo}"]`).uncheck();
    }

    ifBoxChecked(checkBoxNo) {
        this.elements.checkbox().find(`input[value="option-${checkBoxNo}"]`).should('be.checked');
    }

    ifBoxNotChecked(checkBoxNo) {
        this.elements.checkbox().find(`input[value="option-${checkBoxNo}"]`).should('not.be.checked');
    }

    checkRadioButton(radioButtonValue) {
        this.elements.radioButton().find('input[type="radio"]').check(radioButtonValue);
    }

    ifRadioButtonChecked(radioButtonValue) {
        this.elements.radioButton().find(`input[value="${radioButtonValue}"]`).should('be.checked');
    }

    clickDropdownMenuAndChooseValue(dropDownMenuOption, dropDownValue) {
        this.dropDownMenuNo = dropDownMenuOption;
        this.elements.dropdownMenus().select(dropDownValue);
        this.elements.dropdownMenus().should('have.value', dropDownValue);
    }
}
export default new DropDownCheckboxesButtonsPage();
