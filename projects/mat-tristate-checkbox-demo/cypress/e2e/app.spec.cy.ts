describe('Main page', () => {
  it('Visits the project demo page', () => {
    cy.visit('/');
    cy.contains('3-State-Checkbox with NgModel');
  });
});
