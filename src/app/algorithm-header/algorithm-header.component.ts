import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-algorithm-header',
  templateUrl: './algorithm-header.component.html',
  styleUrls: ['./algorithm-header.component.css'],
  imports: [CommonModule]
})
export class AlgorithmHeaderComponent {
  isAuthenticated = true; // Placeholder for actual authentication state
  usernamePlaceholder = 'Guest'; // Placeholder for username
  // CHANGE TO SETTER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  dropdownVisible = false;
  hideTimeout: any;
  showDropdown(): void {
    clearTimeout(this.hideTimeout);
    this.dropdownVisible = true;
  }
  hideDropdown(): void {
    this.hideTimeout = setTimeout(() => {
      this.dropdownVisible = false;
    }, 150);
  }
  // You would later update `isAuthenticated` and `usernamePlaceholder`
  // based on the user's actual authentication state.
}
