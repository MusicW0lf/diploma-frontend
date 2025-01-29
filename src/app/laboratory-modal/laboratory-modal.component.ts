import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../laboratory-modal/laboratory-modal-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-laboratory-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './laboratory-modal.component.html',
  styleUrls: ['./laboratory-modal.component.css']
})
export class LaboratoryModalComponent implements OnDestroy {
  selectedLanguage: string = '';
  projectName: string = '';
  isModalOpen: boolean = false;
  private modalSubscription: Subscription;

  constructor(private modalService: ModalService) {
    // Subscribe to modal open event
    this.modalSubscription = this.modalService.modalOpen$.subscribe(language => {
      if (language) {
        this.selectedLanguage = language;
        this.isModalOpen = true;  // Open modal
      } else {
        this.isModalOpen = false;  // Close modal if empty string is emitted
      }
    });
  }

  // Close modal and notify service
  closeModal() {
    this.modalService.closeModal(); 
  }

  // Create a project (API call or other functionality)
  createProject() {
    alert(`Project created with name: ${this.projectName} and language: ${this.selectedLanguage}`);
    // Implement API call here
  }

  // Cleanup subscription on component destroy
  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
  }
}
