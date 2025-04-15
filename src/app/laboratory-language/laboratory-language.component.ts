import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../laboratory-modal/laboratory-modal-service';  // Import the modal service

export enum Language {
  Python = 'Python',
  JavaScript = 'JavaScript',
  Java = 'Java',
}

@Component({
  selector: 'app-laboratory-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './laboratory-language.component.html',
  styleUrls: ['./laboratory-language.component.css']
})
export class LaboratoryLanguageComponent {
  selectedLanguage: string = '';  // This will store the short version for the DB
  isDropdownOpen: boolean = false;
  languages = Object.values(Language);  // Display the full language names in the dropdown

  constructor(private modalService: ModalService) {}

  timeoutId: any = null;

  setDropdownState(state: boolean) {
    if (state) {
      // If the cursor re-enters the button or menu, cancel the hiding
      clearTimeout(this.timeoutId);
      this.isDropdownOpen = true;
    } else {
      // Delay before closing the dropdown
      this.timeoutId = setTimeout(() => {
        this.isDropdownOpen = false;
      }, 150); // 0.15 seconds
    }
  }

  // When a language is selected, open the modal with the selected full language name
  selectLanguage(language: string) {
    this.modalService.openModal(language);  // Pass the full language name to ModalService to open the modal
  }
}
