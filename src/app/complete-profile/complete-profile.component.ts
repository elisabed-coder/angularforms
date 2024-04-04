import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss'],
})
export class CompleteProfileComponent implements OnInit {
  completeForm!: FormGroup;
  formData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const formDataParam = this.route.snapshot.queryParamMap.get('formData');
    if (formDataParam) {
      try {
        this.formData = JSON.parse(formDataParam);
      } catch (error) {
        console.error('Error parsing formData JSON:', error);
      }
    }
    this.completeForm = this.fb.group({
      phone: ['', Validators.required],
      address: [''],
      country: ['', Validators.required],
    });
  }

  get phone() {
    return this.completeForm.get('phone');
  }
  get address() {
    return this.completeForm.get('address');
  }

  get country() {
    return this.completeForm.get('country');
  }
  onFormSubmit() {
    if (this.completeForm.valid) {
      const mergedFormData = {
        ...this.formData,
        phone: this.completeForm.get('phone')?.value,
        address: this.completeForm.get('address')?.value,
        country: this.completeForm.get('country')?.value,
      };

      this.router.navigate(['/accountverification'], {
        queryParams: { mergedFormData: JSON.stringify(mergedFormData) },
      });
    }
  }
}
