import { Component, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

declare var Prism: any;

@Component({
  selector: 'app-laboratory-editor',
  imports: [FormsModule, CommonModule],
  templateUrl: './laboratory-editor.component.html',
  styleUrl: './laboratory-editor.component.css'
})
export class LaboratoryEditorComponent implements AfterViewChecked {
  
  goBack(): void {
    this.router.navigate(['/laboratory']);
  }


  pythonCode: string = '';
  highlightedCode: string = '';
  output: string | string[] = '';
  error: string = '';
  projectName: string = '';
  projectId: string | null = null;
  isModalOpen: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }

  renameProject(): void {
    const newName = this.projectName;
    const projectId = this.projectId;
    console.log(newName)
  
    const url = `http://localhost:8000/project/${projectId}/rename/`;
    const body = { new_name: newName };
  
    this.http.patch<{ success: boolean; new_name?: string; error?: string }>(
      url,
      body,
      { withCredentials: true }
    ).subscribe({
      next: (response) => {
        if (response.success) {
          alert(`Name changed to "${newName}"`);
          this.isModalOpen = false; // Optionally close modal
        } else {
          alert(`Rename failed: ${response.error || 'Unknown error'}`);
        }
      },
      error: (err) => {
        console.error('Error renaming project:', err);
        alert('Request failed. Please try again later.');
      }
    });
  }
  
  

  deleteProject(): void {
    const url = `http://localhost:8000/project/${this.projectId}/delete/`;
  
    this.http.delete<{ detail: string }>(url, { withCredentials: true })
      .subscribe({
        next: (response) => {
          alert(response.detail); 
          this.router.navigate(['/laboratory']);
        },
        error: (err) => {
          console.error('Error deleting project:', err);
          const message = err.error?.detail || 'Failed to delete project';
          alert(`Delete failed: ${message}`);
        }
      });
  }
  

  handleTab(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const textarea = event.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      this.pythonCode =
        this.pythonCode.substring(0, start) +
        '\t' +
        this.pythonCode.substring(end);

      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
  }

  updatePreview() {
    setTimeout(() => {
      if (typeof Prism !== 'undefined') {
        this.highlightedCode = Prism.highlight(
          this.pythonCode,
          Prism.languages.python,
          'python'
        );
      }
    }, 0);
  }

  ngAfterViewChecked() {
    Prism.highlightAll();
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log('Loaded project ID:', this.projectId);
  
    // Optional fallback from route param
    const code = this.route.snapshot.paramMap.get('pythonCode');
    if (code != null) {
      this.pythonCode = code;
    }
  
    if (this.projectId) {
      this.http.get<{
        project_id: number;
        name: string;
        language: string;
        random_colors: boolean;
        code: string;
        create_date: string;
        update_date: string;
      }>(
        `http://localhost:8000/project/${this.projectId}/`,
        { withCredentials: true }
      )
      .subscribe({
        next: (project) => {
          console.log('Project loaded:', project);
          this.pythonCode = project.code;
          this.projectName = project.name;
        },
        error: (error) => {
          console.error('Failed to load project:', error);
          this.error = 'Unable to load project. Please check if it exists or if you are logged in.';
        }
      });
    } else {
      this.error = 'No project ID provided in route.';
    }
  }
  
  // 
  executeCode() {
    const data = {
      project_id: this.projectId,
      code: this.pythonCode 
    };
  
    this.http.post<{ stdout: string[] | string, error: string | null }>(
      'http://localhost:8000/project/execute/', 
      data,
      { withCredentials: true }
    )
    .subscribe({
      next: (response) => {
        this.output = response.stdout ? response.stdout : 'No Output';
        this.error = response.error ? response.error : 'No Errors';
        console.log('Execution response:', response);
      },
      error: (error) => {
        console.error('Error executing code:', error);
        this.output = '';
        this.error = 'Failed to execute code. Server error or unauthorized.';
      }
    });
  }
  
}