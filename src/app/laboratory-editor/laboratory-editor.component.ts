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

  //asdasdsadasdsad
  renameProject() {
    console.log('Renamed project to:', this.projectName);
    this.closeModal();
  }

  // adsadasdasds
  deleteProject() {
    console.log('Project deleted');
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
    var code = this.route.snapshot.paramMap.get('pythonCode');
    console.log(code);
    if (code != null)
      {
        this.pythonCode = code;
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