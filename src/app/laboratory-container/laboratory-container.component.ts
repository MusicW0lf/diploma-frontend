// src/app/laboratory-container/laboratory-container.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../registration/auth.servise';
import { LaboratoryProjectComponent } from '../laboratory-project/laboratory-project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-laboratory-container',
  templateUrl: './laboratory-container.component.html',
  styleUrls: ['./laboratory-container.component.css'],
  imports: [LaboratoryProjectComponent, CommonModule]
})
export class LaboratoryContainerComponent implements OnInit {
  projects: any[] = [];  // Array to hold the user projects
  isLoading: boolean = true;  // Loading state flag
  errorMessage: string = '';  // Error message to display if the request fails

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  // Fetch the projects on component initialization
  loadProjects(): void {
    this.authService.getUserProjects().subscribe({
      next: (data) => {
        this.projects = data;  // Assign fetched projects to the local array
        this.isLoading = false;  // Set loading to false when data is fetched
      },
      error: (error) => {
        this.errorMessage = 'Failed to load projects. Please try again later.'; // Set error message
        this.isLoading = false;  // Set loading to false even on error
      },
    });
  }
}
