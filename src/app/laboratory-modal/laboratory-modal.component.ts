import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../laboratory-modal/laboratory-modal-service';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Route, Router } from '@angular/router';

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
  constructor(private modalService: ModalService, private http: HttpClient, private router: Router) {

    this.modalSubscription = this.modalService.modalOpen$.subscribe(language => {
      if (language) {
        this.selectedLanguage = language;
        this.isModalOpen = true; 
      } else {
        this.isModalOpen = false; 
      }
    });
  }

  closeModal() {
    this.modalService.closeModal(); 
  }

  createProject() {
    const data = {
      name: this.projectName,
      language: this.selectedLanguage
    };
  
    this.http.post<{ project_id: number }>('http://localhost:8000/create-project', data, { withCredentials: true })
      .subscribe({
        next: (response) => {
          const projectId = response.project_id;
          console.log('Project created:', projectId);
          this.router.navigate(['/project', projectId]);
        },
        error: (error) => {
          console.error('Error creating project:', error);
          alert('Failed to create project. Check input or login.');
        }
      });
  }
  

  // Cleanup subscription on component destroy
  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
  }
}
