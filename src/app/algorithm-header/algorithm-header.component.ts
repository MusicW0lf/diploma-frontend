import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd  } from '@angular/router';
import { AuthService } from '../registration/auth.servise';

@Component({
  selector: 'app-algorithm-header',
  templateUrl: './algorithm-header.component.html',
  styleUrls: ['./algorithm-header.component.css'],
  imports: [CommonModule, RouterModule]
})
export class AlgorithmHeaderComponent implements OnInit {
 
  usernamePlaceholder = 'Guest';  
  isAuthenticated = false;
  dropdownVisible = false;
  hideTimeout: any;

  constructor(private authService: AuthService, private router: Router) {} 


  navigateToAuth(mode: string) {
    this.router.navigate(['/auth'], { queryParams: { mode } });
  }
  
  ngOnInit(): void {
    this.authService.getUsername().subscribe({
      next: () => {
        // Values will automatically update from AuthService
        this.authService.username$.subscribe(username => {
          this.usernamePlaceholder = username;
        });

        this.authService.isAuthenticated$.subscribe(isAuthenticated => {
          this.isAuthenticated = isAuthenticated;
        });
      },
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
    this.authService.logout() 
    this.router.navigate(['']);
  }

  




}
