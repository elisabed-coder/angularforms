import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-individual-account',
  templateUrl: './individual-account.component.html',
  styleUrls: ['./individual-account.component.scss'],
})
export class IndividualAccountComponent implements OnInit {
  individualForm!: FormGroup;
  submitted = false;
  individualFromValues: any[] = [];
  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.individualForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(17),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
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
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  onFormSubmit() {
    if (this.individualForm.invalid) {
      this.submitted = true;

      return;
    } else {
      this.submitted = false;
      const formData = {
        fullName: this.individualForm.get('fullName')?.value,
        email: this.individualForm.get('email')?.value,
        password: this.individualForm.get('password')?.value,
        acceptTerms: this.individualForm.get('acceptTerms')?.value,
      };
      this.router.navigate(['/complete'], {
        queryParams: { formData: JSON.stringify(formData) },
      });
    }
  }

  get fullName() {
    return this.individualForm.get('fullName');
  }
  get email() {
    return this.individualForm.get('email');
  }
  get password() {
    return this.individualForm.get('password');
  }
  get acceptTerms() {
    return this.individualForm.get('acceptTerms');
  }
}
