import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MonacoEditorModule } from 'ngx-monaco-editor';

@Component({
  selector: 'app-laboratory-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MonacoEditorModule
  ],
  templateUrl: './laboratory-editor.component.html',
  styleUrls: ['./laboratory-editor.component.css']
})
export class LaboratoryEditorComponent implements AfterViewInit {
  pythonCode: string = '';
  output: string = '';
  error: string = '';
  highlightedCode: string = '';
  projectName: string = '';
  projectId: string | null = null;
  isModalOpen: boolean = false;

  editorOptions = {
    theme: 'vs-dark',
    language: 'python',
    automaticLayout: true
  };

  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngAfterViewInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log('Loaded project ID:', this.projectId);
  }

  goBack(): void {
    this.router.navigate(['/laboratory']);
  }

  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }

  renameProject() {
    console.log('Renamed project to:', this.projectName);
    this.closeModal();
  }

  deleteProject() {
    console.log('Project deleted');
  }

  executeCode() {
    this.http.post('/laboratory/execute/', { project_id: '' }).subscribe(
      (response: any) => {
        this.output = response.stdout || 'No Output';
        this.error = response.error || 'No Errors';
      },
      (err) => {
        this.error = 'Error: ' + err.message;
      }
    );
  }
}
