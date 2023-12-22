
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';

import { MatTristateCheckboxComponent } from '../../../mat-tristate-checkbox/src/lib/mat-tristate-checkbox.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [MatTristateCheckboxComponent, FormsModule, MatCheckboxModule, ReactiveFormsModule]
})
export class AppComponent {
  isHoliday = undefined;
  isHolidayDisabled = false;
  isCustomer = false;
  isCustomerDisabled = false;

  public form = new FormGroup({
    hasTrack: new FormControl<boolean | undefined>({value: undefined, disabled: false}, {nonNullable: true})
  });

  public form2 = new FormGroup({
    isCustomer: new FormControl({value: false, disabled: false}, {nonNullable: true})
  });

  public resetForm(): void {
    this.form.reset({
      hasTrack: undefined
    });
  }

  public disableHasTrack($event: MatCheckboxChange): void {
    if ($event.checked) {
      this.form.get('hasTrack')?.disable();
    } else {
      this.form.get('hasTrack')?.enable();
    }
  }

  public resetForm2(): void {
    this.form2.reset({
      isCustomer: false
    });
  }

  public disableIsCustomer($event:  MatCheckboxChange): void {
    if ($event.checked) {
      this.form2.get('isCustomer')?.disable();
    } else {
      this.form2.get('isCustomer')?.enable();
    }
  }

  public formatTristateValue(value: boolean | undefined | null): string {
    return (value === undefined) || (value === null) ? '---' : value.toString();
  }
}
