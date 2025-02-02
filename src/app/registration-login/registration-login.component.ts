import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-login',
  templateUrl: './registration-login.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./registration-login.component.css']
})
export class RegistrationLoginComponent {
  email: string = '';
  password: string = '';
  loginMessage: string = '';
  keepSignedIn: boolean = false;
  
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const body = { email: this.email, password: this.password };
  
    this.http.post<any>('http://localhost:8000/login', body, { responseType: 'json' })
      .subscribe({
        next: response => {
          this.loginMessage = 'Login successful!';
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['']);
        },
        error: error => {
          this.loginMessage = 'Login failed. Please check your credentials.';
          console.log(this.loginMessage)
        }
      });
  }
  
  loginWithGitlab() {}
  loginWithGithub() {}
  loginWithGoogle() {}
  loginWithFacebook() {}
  
  navigateToAuth(mode: string) {
    this.router.navigate(['/auth'], { queryParams: { mode } });
  }
}
