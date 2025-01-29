import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../laboratory-modal/laboratory-modal-service';  // Import the modal service

export enum Language {
  Python = 'Python',
  JavaScript = 'JavaScript',
  Java = 'Java',
  // Add more languages as necessary
}

@Component({
  selector: 'app-laboratory-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './laboratory-language.component.html',
  styleUrls: ['./laboratory-language.component.css']
})
export class LaboratoryLanguageComponent {
  selectedLanguage: string = '';
  isDropdownOpen: boolean = false;
  languages = Object.values(Language);  // Using the Language enum values for dropdown

  constructor(private modalService: ModalService) {}

  // Open and close the dropdown
  setDropdownState(state: boolean) {
    this.isDropdownOpen = state;
  }

  // When a language is selected, open the modal with the selected language
  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.modalService.openModal(language);  // Pass language to ModalService to open the modal
  }
}
