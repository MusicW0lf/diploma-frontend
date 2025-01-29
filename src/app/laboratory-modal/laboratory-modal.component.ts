import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-laboratory-modal',
  imports: [CommonModule],
  templateUrl: './laboratory-modal.component.html',
  styleUrl: './laboratory-modal.component.css'
})
export class LaboratoryModalComponent {
  @Input() selectedLanguage: string = '';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();  // Emit event to parent
  }
}
