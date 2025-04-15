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
export class LaboratoryEditorComponent implements AfterViewChecked {
  

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.project.project_id = Number(projectId); // Convert to number
      console.log('Loaded project ID:', this.project.project_id);
    }
    else {
      this.router.navigate(['']);
      return;
    }
  
    this.http.get(`http://localhost:8000/project/${this.project.project_id}`, {
      withCredentials: true
    }).subscribe({
      next: (project) => {
        console.log('Project loaded:', project);
        this.project = project;
      },
      error: (err) => {
        if (err.status === 403) {
          this.router.navigate(['']);
        } else {
          console.error('Error loading project:', err);
        }
      }
    });
  }



  goBack(): void {
    this.router.navigate(['']);
  }

  project: any = {};
  highlightedCode: string = '';
  output: string = '';
  error: string = '';
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

  //asdasdsadasdsad
  renameProject(projectId: number, newName: string): void {
    const body = { name: newName };
  
    this.http.patch(`http://localhost:8000/project/${projectId}/rename/`, body, {
      withCredentials: true
    }).subscribe({
      next: () => {
        console.log('Project renamed successfully');
        // Optionally refresh the project or UI
      },
      error: (err) => {
        if (err.status === 403) {
          alert('You are not allowed to rename this project.');
        }  else {
          console.error('Error renaming project:', err);
        }
      }
    });
  }

  // adsadasdasds
  deleteProject(projectId: number): void {
    this.http.delete(`http://localhost:8000/project/${projectId}/delete/`, {
      withCredentials: true
    }).subscribe({
      next: () => {
        console.log('Project deleted');
        this.router.navigate(['/laboratory']); // Navigate home or refresh list
      },
      error: (err) => {
        if (err.status === 403) {
          alert('You are not authorized to delete this project.');
        } else {
          console.error('Error deleting project:', err);
        }
      }
    });
  }

  handleTab(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const textarea = event.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      this.project.code =
        this.project.code.substring(0, start) +
        '\t' +
        this.project.code.substring(end);

      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
  }

  updatePreview() {
    setTimeout(() => {
      if (typeof Prism !== 'undefined' && this.project?.language) {
        const language = this.project.language.toLowerCase();
        if (Prism.languages[language]) {
          console.log(language);
  
          // Highlight the code using Prism
          const highlighted = Prism.highlight(
            this.project.code,
            Prism.languages[language],
            language
          );
  
          // Set the class dynamically on the code element, then set the highlighted code
          this.highlightedCode = `<code class="language-${language}">${highlighted}</code>`;
        } else {
          console.warn(`Language "${language}" is not supported by Prism.`);
          this.highlightedCode = `<code>${this.project.code}</code>`;
        }
      }
    }, 0);
  }
  

  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  
  // asdasdaasdsa
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
