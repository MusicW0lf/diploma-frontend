import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalOpenSubject = new Subject<string>();  // Subject to pass language data
  modalOpen$ = this.modalOpenSubject.asObservable();

  openModal(language: string) {
    this.modalOpenSubject.next(language);  // Emit the language when opening the modal
  }

  closeModal() {
    this.modalOpenSubject.next('');  // Close the modal by emitting an empty string
  }
}
