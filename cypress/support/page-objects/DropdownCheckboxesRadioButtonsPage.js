export class DropDownCheckboxesButtonsPage {
    elements ={

        dropdownMenus : () => cy.get('#dropdowm-menu%'),
        checkbox : () => cy.get('#checkboxes'),
        radioButton : () => cy.get('#radio-buttons'), // 'input[type="radio"]'


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
        this.elements.radioButton().find(`input[value="${radioButtonValue}"]`).should('be.checked')
    }

}
export default new DropDownCheckboxesButtonsPage();
