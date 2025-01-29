import { Component } from '@angular/core';
import { Language } from '../laboratory/laboratory.component';
import { CommonModule } from '@angular/common';
import { LaboratoryModalComponent } from '../laboratory-modal/laboratory-modal.component';

@Component({
  selector: 'app-laboratory-language',
  standalone: true,
  imports: [CommonModule, LaboratoryModalComponent],
  templateUrl: './laboratory-language.component.html',
  styleUrl: './laboratory-language.component.css'
})
export class LaboratoryLanguageComponent {
  isDropdownOpen = false;
  isModalOpen = false;
  selectedLanguage: string = '';
  languages = Object.values(Language);

  setDropdownState(state: boolean) {
    this.isDropdownOpen = state;
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.isModalOpen = true;
    this.isDropdownOpen = false; // Close dropdown after selection
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedLanguage = ''; // Reset selected language
  }
}
