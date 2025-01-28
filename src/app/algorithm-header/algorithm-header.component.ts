import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-algorithm-header',
  templateUrl: './algorithm-header.component.html',
  styleUrls: ['./algorithm-header.component.css'],
  imports: [CommonModule]
})
export class AlgorithmHeaderComponent {
  dropdownVisible = false;
  isAuthenticated = true; // Placeholder for actual authentication state
  usernamePlaceholder = 'Guest'; // Placeholder for username
  
  // This method will toggle the visibility of the dropdown
  toggleDropdown(visible: boolean): void {
    this.dropdownVisible = visible;
  }

  // You would later update `isAuthenticated` and `usernamePlaceholder`
  // based on the user's actual authentication state.
}
