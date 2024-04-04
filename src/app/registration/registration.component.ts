import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../validators/phone.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
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
      email: ['', Validators.required, Validators.email],
      mobileNumber: ['', Validators.required, Validators.pattern(/^995\d{9}$/)],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
      companyName: [''],
    });
  }

  ngOnInit(): void {}

  onFormSubmit() {
    this.registerForm.value;
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email() {
    return this.registerForm.get('email');
  }

  get companyName() {
    return this.registerForm.get('companyName');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get mobile() {
    return this.registerForm.get('mobileNumber');
  }
}
