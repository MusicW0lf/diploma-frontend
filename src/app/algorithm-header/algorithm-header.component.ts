import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../registration/auth.servise';

@Component({
  selector: 'app-algorithm-header',
  templateUrl: './algorithm-header.component.html',
  styleUrls: ['./algorithm-header.component.css'],
  imports: [CommonModule, RouterModule]
})
export class AlgorithmHeaderComponent implements OnInit {
  isAuthenticated = false; 
  usernamePlaceholder = 'Guest';  

  dropdownVisible = false;
  hideTimeout: any;

  constructor(private authService: AuthService, private router: Router) {} 


  navigateToAuth(mode: string) {
    this.router.navigate(['/auth'], { queryParams: { mode } });
  }
  
  ngOnInit(): void {
    this.authService.getUsername().subscribe(username => {
      this.usernamePlaceholder = username;
      this.isAuthenticated = username !== 'Guest'; 
    });
  }

  showDropdown(): void {
    clearTimeout(this.hideTimeout);
    this.dropdownVisible = true;
  }

  hideDropdown(): void {
    this.hideTimeout = setTimeout(() => {
      this.dropdownVisible = false;
    }, 150);
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false; 
    this.usernamePlaceholder = 'Guest'; 
  }
}
