import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { IndividualAccountComponent } from './individual-account/individual-account.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { VerificationComponent } from './complete-profile/verification/verification.component';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialAngularSelectModule } from 'material-angular-select';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { LastStageComponent } from './last-stage/last-stage.component';
import { AutocompleteDemoComponent } from './components/autocomplete-demo/autocomplete-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    JoinUsComponent,
    IndividualAccountComponent,
    CompleteProfileComponent,
    VerificationComponent,
    AccountVerificationComponent,
    LastStageComponent,
    AutocompleteDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
