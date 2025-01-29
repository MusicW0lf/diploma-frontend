import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-laboratory-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './laboratory-modal.component.html',
  styleUrl: './laboratory-modal.component.css'
})
export class LaboratoryModalComponent {
  @Input() selectedLanguage: string = '';
  @Output() close = new EventEmitter<void>();
  projectName: string = '';

  createProject() {
    alert("project created")
  }
  //   if (!this.projectName) return;

  //   const userToken = localStorage.getItem('authToken'); // Example: Get token from storage
  //   const requestBody = {
  //     name: this.projectName,
  //     language: this.selectedLanguage,
  //     userToken: userToken
  //   };

  //   fetch('https://api.example.com/projects', {  // Replace with actual API URL
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${userToken}`
  //     },
  //     body: JSON.stringify(requestBody)
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Project Created:', data);
  //     window.location.href = `/projects/${data.id}`; // Redirect to project page
  //   })
  //   .catch(error => console.error('Error:', error));
  // }
}
