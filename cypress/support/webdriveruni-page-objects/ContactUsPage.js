export class ContactUsPage {
    elements ={

        firstName : () => cy.get('input[name="first_name"]'),
        lastName : () => cy.get('input[name="last_name"]'),
        emailAddress : () => cy.get('input[name="email"]'),
        comments : () => cy.get('textarea[name="message"]'),
        resetBtn : () => cy.get('[value="RESET"]'),
        submitBtn : () => cy.get('[value="SUBMIT"]')

    }

    enterFirstName(firstName) {
        this.elements.firstName().type(firstName)
    }

    enterLastName(lastName) {
        this.elements.lastName().type(lastName)
    }

    enterEmailAddress(emailAddress) {
        this.elements.emailAddress().type(emailAddress)
    }

    enterComments(comments) {
        this.elements.comments().type(comments)
    }

    clickResetButton() {
        this.elements.resetBtn().click()
    }

    clickSubmitButton() {
        this.elements.submitBtn().click()
    }

    checkIfInputsAreEmpty() {
        this.elements.firstName().should('be.empty');
        this.elements.lastName().should('be.empty');
        this.elements.emailAddress().should('be.empty');
        this.elements.comments().should('be.empty');
    }
}
export default new ContactUsPage();