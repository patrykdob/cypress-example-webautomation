export class AutocompletePage {
    elements ={
        
        itemInput : () => cy.get('#myInput'),
        submitButton : () => cy.get('#submit-button'),
        autocompleteList: () => cy.get('#myInputautocomplete-list')

    }

    typeItemInput(input) {
        this.elements.itemInput().type(input);
    }

    chooseItemFromAutocompleteList(item) {
        this.elements.autocompleteList().contains(item).click();
    }

    clickSubmitItem() {
        this.elements.submitButton().click();
    }

}
export default new AutocompletePage();