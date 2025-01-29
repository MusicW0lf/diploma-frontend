import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-signup',
  imports: [FormsModule],
  templateUrl: './registration-signup.component.html',
  styleUrl: './registration-signup.component.css'
})
export class RegistrationSignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  loginMessage: string = '';
  passwordConfirm: string = '';
  emailUpdates: boolean = false;

  onSubmitSignUp() {}

  signUpWithGitlab() {}
  signUpWithGithub() {}
  signUpWithGoogle() {}
  signUpWithFacebook() {}
  

}
