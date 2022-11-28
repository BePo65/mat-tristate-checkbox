import { createOutputSpy } from 'cypress/angular';

import { MatTristateCheckboxComponent } from '../../src/lib/mat-tristate-checkbox.component';

describe('MatTristateCheckbox', () => {
  it('mounts', () => {
    cy.mount(MatTristateCheckboxComponent);
  });

  it('should default to false', () => {
    cy.mount(
      '<mat-tristate-checkbox id="demo-checkbox" [color]="\'primary\'" [labelPosition]="\'before\'">is holiday?</mat-tristate-checkbox>',
      {
        componentProperties: {
          change: createOutputSpy('changeSpy')
        }
      }
    );
    cy.get('#demo-checkbox').click();
    // TODO test fails with @changeSpy not found
    cy.get('@changeSpy').should('have.been.calledWith', 1);
  });
});
