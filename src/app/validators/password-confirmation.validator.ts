import { AbstractControl } from '@angular/forms';

export const passwordConfirmation = (control: AbstractControl) => {
  let password = control?.get('password');
  let confirmPassword = control?.get('confirmPassword');
  let doesNotMatch = password?.value !== confirmPassword?.value;
  if (doesNotMatch) {
    control?.get('confirmPassword')?.setErrors({ passwordNotMatch: true });
  }
  return doesNotMatch ? { passwordNotMatch: true } : null;
};
