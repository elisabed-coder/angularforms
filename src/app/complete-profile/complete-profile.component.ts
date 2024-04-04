import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss'],
})
export class CompleteProfileComponent implements OnInit {
  completeForm!: FormGroup;
  formData: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    const formDataParam = this.route.snapshot.queryParamMap.get('formData');
    if (formDataParam) {
      try {
        this.formData = JSON.parse(formDataParam);
        console.log(this.formData);
      } catch (error) {
        console.error('Error parsing formData JSON:', error);
      }
    }
    // Define the form group here
    this.completeForm = this.fb.group({
      phone: [''],
      address: [''],
      country: [''],
    });
  }
  onFormSubmit() {
    console.log(this.completeForm.value);
  }
}
