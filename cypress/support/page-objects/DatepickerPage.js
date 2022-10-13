export class DatepickerPage {
    elements ={
        
        datepicker : () => cy.get('#datepicker'),
        datepickerDays: () => cy.get('.datepicker-days'),
        datepickerMonths: () => cy.get('.datepicker-months'),
        datepickerYear: () => cy.get('.datepicker-years'),
        datepickerSwitch: () => cy.get('.datepicker-switch')

    }

    changeDate() {
        this.elements.datepicker().click();
        /// switch to years to change whole date
        this.elements.datepickerSwitch().click({ multiple: true });
        this.elements.datepickerYear().find('tbody').contains('2020').click();
        this.elements.datepickerMonths().contains('May').click();
        this.elements.datepickerDays().contains('10').click();
        this.elements.datepicker().find('input[type="text"]').invoke('prop', 'value').should('contain', '05-10-2020');
    }

}
export default new DatepickerPage();
