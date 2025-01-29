import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../registration/auth.servise';

@Component({
  selector: 'app-algorithm-header',
  templateUrl: './algorithm-header.component.html',
  styleUrls: ['./algorithm-header.component.css'],
  imports: [CommonModule, RouterModule]
})
export class AlgorithmHeaderComponent implements OnInit {
  isAuthenticated = false;  // Placeholder for actual authentication state
  usernamePlaceholder = 'Guest';  // Default to 'Guest'

  dropdownVisible = false;
  hideTimeout: any;

  constructor(private authService: AuthService) {}  // Inject AuthService

  ngOnInit(): void {
    this.authService.getUsername().subscribe(username => {
      this.usernamePlaceholder = username;  // Set the username if authenticated
      this.isAuthenticated = username !== 'Guest';  // Set authentication state
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
    this.authService.logout();  // Clears the token
    this.isAuthenticated = false;  // Update auth state
    this.usernamePlaceholder = 'Guest';  // Reset the username
  }
}
