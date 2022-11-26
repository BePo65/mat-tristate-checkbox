import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHoliday = undefined;
  isHolidayDisabled = false;
  isCustomer = false;
  isCustomerDisabled = false;

  public form = new FormGroup({
    hasTrack: new FormControl<boolean>({value: undefined, disabled: false}, {nonNullable: true})
  });

  public form2 = new FormGroup({
    isCustomer: new FormControl({value: false, disabled: false}, {nonNullable: true})
  });

  public resetForm(): void {
    this.form.reset({
      hasTrack: undefined
    });
  }

  public disableHasTrack($event: any): void {
    if ($event.checked) {
      this.form.get('hasTrack').disable();
    } else {
      this.form.get('hasTrack').enable();
    }
  }

  public resetForm2(): void {
    this.form2.reset({
      isCustomer: false
    });
  }

  public disableIsCustomer($event: any): void {
    if ($event.checked) {
      this.form2.get('isCustomer').disable();
    } else {
      this.form2.get('isCustomer').enable();
    }
  }

  public formatTristateValue(value: any): string {
    return (value === undefined) || (value === null) ? '---' : value;
  }
}
