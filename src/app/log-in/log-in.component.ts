import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  ngOnInit(): void {}
  // loginForm: FormGroup;
  // showLoginForm = true;
  // constructor(private fb: FormBuilder, private heroesService: HeroesService) {
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: [
  //       '',
  //       [
  //         Validators.required,
  //         Validators.minLength(6),
  //         Validators.pattern(
  //           '^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z])[0-9A-Za-z!@#$%^&*(),.?":{}|<>]+$'
  //         ),
  //       ],
  //     ],
  //   });
  // }
  // onSubmit() {
  //   console.log(this.loginForm.value);
  // }
  // toggleSection() {
  //   this.showLoginForm = !this.showLoginForm; // Toggle the section visibility
  // }
  // ngOnInit(): void {
  //   this.heroesService.getAllHeroes();
  // }
  // get email() {
  //   return this.loginForm.get('email');
  // }
  // get password() {
  //   return this.loginForm.get('password');
  // }
}
