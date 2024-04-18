import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-autocomplete-demo',
  templateUrl: './autocomplete-demo.component.html',
  styleUrls: ['./autocomplete-demo.component.scss'],
})
export class AutocompleteDemoComponent implements OnInit {
  countries = [
    {
      id: 1,
      name: 'Georgia',
      imageUrl: 'assets/images/Flag_of_Georgia.svg.png',
    },
    {
      id: 2,
      name: 'France',
      imageUrl: 'assets/images/Flag_of_France.svg.png',
    },
    {
      id: 3,
      name: 'Italy ',
      imageUrl: 'assets/images/Flag_of_Italy.svg.png',
    },
    { id: 4, name: 'india', imageUrl: 'assets/images/Flag_of_India.svg.png' },
  ];
  isSubmitted = false;

  onPost = () => (this.isSubmitted = true);

  frm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.frm = this.fb.group({
      selectedCountry: [],
      description: [''],
    });
  }
  typeaheadDisabled: Subject<string> = new Subject<string>();
}
