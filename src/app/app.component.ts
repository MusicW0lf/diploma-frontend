import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AuthService } from './registration/auth.servise';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent{

}