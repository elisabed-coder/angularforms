import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.scss'],
})
export class AccountVerificationComponent implements OnInit {
  bankVerification!: FormGroup;
  mergedFormData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const mergedFormDataParam =
      this.route.snapshot.queryParamMap.get('mergedFormData');
    if (mergedFormDataParam) {
      try {
        this.mergedFormData = JSON.parse(mergedFormDataParam);
      } catch (error) {
        console.error('Error parsing mergedFormData JSON:', error);
      }
    }
    this.bankVerification = this.fb.group({
      bankNumber: ['', Validators.required],
    });
  }

  get bankNumber() {
    return this.bankVerification.get('bankNumber');
  }

  onFormSubmit() {
    if (this.bankVerification.valid) {
      const wholeMergetData = {
        ...this.mergedFormData,
        bankNumber: this.bankVerification.get('bankNumber')?.value,
      };
      console.log('Whole Merget Data:', wholeMergetData);
      this.router.navigate(['/'], {
        queryParams: { wholeMergetData: JSON.stringify(wholeMergetData) },
      });
    }
  }
}
