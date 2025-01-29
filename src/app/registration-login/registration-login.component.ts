import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-login',
  imports: [FormsModule],
  templateUrl: './registration-login.component.html',
  styleUrl: './registration-login.component.css'
})
export class RegistrationLoginComponent {
email: string = '';
password: string = '';
keepSignedIn: boolean = false;

onSubmit(){
  //API HERE
}

loginWithGoogle()
{}

loginWithGitlab()
{}
loginWithGithub()
{}

loginWithFacebook()
{}

}
