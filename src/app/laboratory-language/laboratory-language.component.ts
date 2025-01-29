import { Component } from '@angular/core';
import { Language } from '../laboratory/laboratory.component';
import { CommonModule } from '@angular/common';
import { LaboratoryModalComponent } from '../laboratory-modal/laboratory-modal.component';

@Component({
  selector: 'app-laboratory-language',
  imports: [CommonModule, LaboratoryModalComponent],
  templateUrl: './laboratory-language.component.html',
  styleUrl: './laboratory-language.component.css'
})
export class LaboratoryLanguageComponent {
  isDropdownOpen = false;
  languages = Object.values(Language);

  setDropdownState(state: boolean) {
    this.isDropdownOpen = state;
  }

  isModalVisible: boolean = false;
  selectedLanguage: string = '';
  openModal(language: string) {
    this.selectedLanguage = language;
    this.isModalVisible = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalVisible = false;
    document.body.style.overflow = '';
  }
}
