import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckboxDefaultOptions, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'bp-mat-tristate-checkbox',
  templateUrl: './bp-mat-tristate-checkbox.component.html',
  styleUrls: ['./bp-mat-tristate-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  BpMatTristateCheckboxComponent),
      multi: true,
    },
    { provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions }
  ]
})
export class BpMatTristateCheckboxComponent implements ControlValueAccessor {
  @Input() public color = 'accent';
  @Input() public disabled: boolean;
  @Input() labelPosition: 'before' | 'after' = 'after';

  public value: boolean | undefined;

  private chkStates: Array<boolean | undefined> = [undefined, false, true];
  private onChange: any;
  private onTouched: any;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Set value of this checkbox to given value.
   * @param value - new value for this checkbox
   */
  writeValue(value: boolean | undefined): void {
    if (!this.chkStates.includes(value)) {
      throw new Error(`Value '${value}' in  BpMatTristateCheckboxComponent is invalid (should boolean or undefined).`);
    }
    this.value = value;
  }

  /**
   * Cycle value of this checkbox to next value.
   */
  next() {
    if (!this.disabled) {
      this.value = this.chkStates[(this.chkStates.indexOf(this.value) + 1) % this.chkStates.length];
      this.onChange(this.value);
      this.onTouched();
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
