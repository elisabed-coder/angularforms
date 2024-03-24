import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { passwordConfirmation } from '../validators/password-confirmation.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private sf: FormBuilder) {
    this.signUpForm = this.sf.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(17),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(17),
          ],
        ],
        email: ['', Validators.email],
        mobile: ['', [Validators.required, Validators.pattern('995[0-9]{9}')]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(
              '^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z])[0-9A-Za-z!@#$%^&*(),.?":{}|<>]+$'
            ),
          ],
        ],
        confirmPassword: [''],
        companyName: ['', Validators.required],
      },
      {
        validators: [passwordConfirmation],
      }
    );
  }
  ngOnInit(): void {}
  onFormSubmit() {
    console.log(this.signUpForm.value);
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get email() {
    return this.signUpForm.get('email');
  }

  get companyName() {
    return this.signUpForm.get('companyName');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get mobile() {
    return this.signUpForm.get('mobile');
  }
}
