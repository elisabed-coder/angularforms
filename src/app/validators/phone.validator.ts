import { AbstractControl } from '@angular/forms';

export function phoneNumberValidator(): (
  control: AbstractControl
) => { invalidPhone: boolean } | null {
  return (control: AbstractControl) => {
    const phoneValue = control.value;

    return phoneValue.startWith('995') ? null : { invalidPhone: true };
  };
}
