export class AjaxLoaderPage {
    
    elements ={

        clickMeButton: () => cy.get('#button1')

    }

    waitForLoaderToBeHidden() {
        cy.get('#loader', { timeout:10000 }).should('be.hidden');
    }

    clickButton() {
        this.elements.clickMeButton().should('be.visible');
        this.elements.clickMeButton().click();
    }

}
export default new AjaxLoaderPage();