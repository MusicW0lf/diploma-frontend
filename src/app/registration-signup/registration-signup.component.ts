import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-signup',
  imports: [FormsModule],
  templateUrl: './registration-signup.component.html',
  styleUrl: './registration-signup.component.css'
})
export class RegistrationSignupComponent {
  passwordConfirm: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  loginMessage: string = '';
  keepSignedIn: boolean = false;
  
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (this.password != this.passwordConfirm)
    {
      this.loginMessage = 'passwords are not the same'
    }
    else
    {
    const body = { email: this.email, password: this.password, username:this.username};
  
    this.http.post<any>('http://localhost:8000/signup', body, {
      responseType: 'json',
      withCredentials: true
    }).subscribe({
      next: response => {
        this.loginMessage = 'Registration successful!';
        this.router.navigate(['']);
      },
      error: error => {
        this.loginMessage = 'Registration failed. This email is already registered.';
        console.error(this.loginMessage);
      }
    });
  }
  }

  signUpWithGitlab() {}
  signUpWithGithub() {}
  signUpWithGoogle() {}
  signUpWithFacebook() {}
  
  navigateToAuth(mode: string) {
    this.router.navigate(['/auth'], { queryParams: { mode } });
  }
}
