/* eslint-disable @angular-eslint/component-selector */
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { MatCheckboxDefaultOptions, MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'mat-tristate-checkbox',
    templateUrl: './mat-tristate-checkbox.component.html',
    styleUrls: ['./mat-tristate-checkbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MatTristateCheckboxComponent),
            multi: true
        },
        { provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions }
    ],
    standalone: true,
    imports: [MatCheckboxModule, FormsModule]
})
export class MatTristateCheckboxComponent implements ControlValueAccessor {
  @Input() public color = 'accent';
  @Input() public disabled = false;
  @Input() labelPosition: 'before' | 'after' = 'after';

  public value?: boolean;

  private chkStates: (boolean | undefined)[] = [undefined, false, true];
  private onChange?:  (value?: boolean) => void;
  private onTouched?: () => void;

  registerOnChange(fn: (value?: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * Set value of this checkbox to given value.
   * (Only) on first run with FormControl value is null.
   * @param value - new value for this checkbox
   */
  writeValue(value?: boolean): void {
    if (value === null) {
      value = this.chkStates[0];
    } else {
      if (!this.chkStates.includes(value)) {
        throw new Error(`Value '${value?.toString() || 'undefined'}' in  MatTristateCheckboxComponent is invalid (should boolean or undefined).`);
      }
    }
    this.value = value;
  }

  /**
   * Cycle value of this checkbox to next value.
   */
  next(): void {
    if (!this.disabled) {
      this.value = this.chkStates[(this.chkStates.indexOf(this.value) + 1) % this.chkStates.length];
      this.onChange?.(this.value);
      this.onTouched?.();
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
