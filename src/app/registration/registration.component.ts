import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RegistrationLoginComponent } from '../registration-login/registration-login.component';
import { RegistrationSignupComponent } from '../registration-signup/registration-signup.component';

@Component({
  selector: 'app-registration',
  imports: [RegistrationLoginComponent, RegistrationSignupComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
