import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RegistrationLoginComponent } from '../registration-login/registration-login.component';
import { RegistrationSignupComponent } from '../registration-signup/registration-signup.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [RegistrationLoginComponent, RegistrationSignupComponent, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private location: Location, private route: ActivatedRoute, private router: Router) {}

  goBack(): void {
    this.router.navigate(['']);
  }

  mode: 'login' | 'signup' = 'login';

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const paramMode = params.get('mode');
      if (paramMode === 'signup' || paramMode === 'login') {
        this.mode = paramMode;
      }
    });
  }
  
}
