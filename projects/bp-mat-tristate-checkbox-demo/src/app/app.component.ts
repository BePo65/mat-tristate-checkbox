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

  public form = new FormGroup({
    hasTrack: new FormControl({value: undefined, disabled: false})
  });

  public resetForm() {
    this.form.reset({
      hasTrack: undefined
    });
  }

  public formatTristateValue(value: any): string {
    return (value === undefined) || (value === null) ? '---' : value;
  }
}
