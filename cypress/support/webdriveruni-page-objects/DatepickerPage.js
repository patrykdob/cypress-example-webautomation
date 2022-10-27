export class DatepickerPage {
    elements ={
        
        datepicker : () => cy.get('#datepicker'),
        datepickerDays: () => cy.get('.datepicker-days'),
        datepickerMonths: () => cy.get('.datepicker-months'),
        datepickerYear: () => cy.get('.datepicker-years'),
        datepickerSwitch: () => cy.get('.datepicker-switch')

    }

    changeDate(day, month, year, expectedDate) {
        this.elements.datepicker().click();
        /// switch to years to change whole date
        this.elements.datepickerSwitch().click({ multiple: true });
        this.elements.datepickerYear().find('tbody').contains(year).click();
        this.elements.datepickerMonths().contains(month).click();
        this.elements.datepickerDays().contains(day).click();
        this.elements.datepicker().find('input[type="text"]').invoke('prop', 'value').should('contain', expectedDate);
    }

}
export default new DatepickerPage();
