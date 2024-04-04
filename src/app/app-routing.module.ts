import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { IndividualAccountComponent } from './individual-account/individual-account.component';
import { VerificationComponent } from './complete-profile/verification/verification.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LogInComponent,
  // },
  // {
  //   path: 'login',
  //   component: LogInComponent,
  // },
  // { path: 'signup', component: SignUpComponent },
  // { path: '**', component: PageNotFoundComponent },
  {
    path: '',
    component: JoinUsComponent,
  },
  { path: 'individual', component: IndividualAccountComponent },
  {
    path: 'complete',
    component: CompleteProfileComponent,
    children: [
      {
        path: 'verification',
        component: VerificationComponent,
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
